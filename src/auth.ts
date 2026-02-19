import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;
const facebookId = process.env.FACEBOOK_APP_ID;
const facebookSecret = process.env.FACEBOOK_APP_SECRET;

// Only add providers if they have valid credentials
const providers: any[] = [];

if (googleId && googleSecret && !googleId.startsWith('your_') && !googleSecret.startsWith('your_')) {
  providers.push(
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    })
  );
}

if (facebookId && facebookSecret && !facebookId.startsWith('your_') && !facebookSecret.startsWith('your_')) {
  providers.push(
    FacebookProvider({
      clientId: facebookId,
      clientSecret: facebookSecret,
    })
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: '/login',
    error: '/login?error=auth',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
