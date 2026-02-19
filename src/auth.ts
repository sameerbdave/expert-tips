import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

const googleId = process.env.GOOGLE_CLIENT_ID || '';
const googleSecret = process.env.GOOGLE_CLIENT_SECRET || '';
const facebookId = process.env.FACEBOOK_APP_ID || '';
const facebookSecret = process.env.FACEBOOK_APP_SECRET || '';

// Build providers array
const providers: any[] = [];

// Add Google if configured properly
if (googleId && googleSecret && !googleId.includes('your_') && !googleSecret.includes('your_')) {
  providers.push(
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    })
  );
}

// Add Facebook if configured properly
if (facebookId && facebookSecret && !facebookId.includes('your_') && !facebookSecret.includes('your_')) {
  providers.push(
    FacebookProvider({
      clientId: facebookId,
      clientSecret: facebookSecret,
    })
  );
}

// Always add credentials provider for guest access
providers.push(
  CredentialsProvider({
    name: 'Guest',
    credentials: {
      // No credentials needed for guest
    },
    async authorize() {
      return {
        id: 'guest-' + Math.random().toString(36).substr(2, 9),
        name: 'Guest User',
        email: 'guest@example.com',
      };
    },
  })
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: '/login',
    error: '/login?error=auth',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
