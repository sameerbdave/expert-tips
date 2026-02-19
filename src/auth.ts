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

// Build providers array with only configured providers
const providers: any[] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && 
    !process.env.GOOGLE_CLIENT_ID.includes('your_') &&
    !process.env.GOOGLE_CLIENT_SECRET.includes('your_')) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  );
}

if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET &&
    !process.env.FACEBOOK_APP_ID.includes('your_') &&
    !process.env.FACEBOOK_APP_SECRET.includes('your_')) {
  providers.push(
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: providers.length > 0 ? providers : [],
  pages: {
    signIn: '/login',
    error: '/login?error=auth_error',
  },
  events: {
    async signIn({ user, account }) {
      if (account && user.email) {
        try {
          await dbConnect();
          const existingUser = await User.findOne({ email: user.email });
          
          if (!existingUser) {
            await User.create({
              email: user.email,
              name: user.name || '',
              image: user.image || null,
              provider: account.provider,
              providerId: account.providerAccountId,
              bio: '',
            });
          }
        } catch (error) {
          console.error('SignIn event error:', error);
        }
      }
    },
  },
  callbacks: {
    async session({ session, token, user }: any) {
      if (session.user && user) {
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
  debug: process.env.NODE_ENV === 'development',
});

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
