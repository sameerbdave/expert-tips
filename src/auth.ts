import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { MongoClient } from 'mongodb';
import dbConnect from '@/lib/db';
import { User } from '@/models/User';

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID || '',
      clientSecret: process.env.FACEBOOK_APP_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      try {
        await dbConnect();

        if (account && profile) {
          const existingUser = await User.findOne({
            email: user.email,
          });

          const imageUrl = (() => {
            if (user.image) return user.image;
            if (account.provider === 'google' && profile.picture) return profile.picture;
            if (account.provider === 'facebook' && (profile as any).picture?.data?.url) 
              return (profile as any).picture.data.url;
            return null;
          })();

          if (!existingUser) {
            await User.create({
              email: user.email,
              name: user.name || profile.name || '',
              image: imageUrl,
              provider: account.provider,
              providerId: account.providerAccountId,
              bio: '',
            });
          } else {
            // Update user info if they don't have an image
            if (!existingUser.image && imageUrl) {
              existingUser.image = imageUrl;
              await existingUser.save();
            }
          }
        }
        return true;
      } catch (error) {
        console.error('SignIn callback error:', error);
        return false;
      }
    },
    async session({ session, token, user }: any) {
      if (session.user) {
        // Fetch user data from database
        try {
          await dbConnect();
          const dbUser = await User.findOne({ email: session.user.email });
          if (dbUser) {
            (session.user as any).id = dbUser._id.toString();
            (session.user as any).bio = dbUser.bio;
            (session.user as any).followers = dbUser.followers;
            (session.user as any).following = dbUser.following;
          }
        } catch (error) {
          console.error('Session callback error:', error);
        }
      }
      return session;
    },
  },
  session: {
    strategy: 'database',
  },
});

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
