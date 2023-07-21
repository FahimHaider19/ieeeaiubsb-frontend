import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "John Smith" },
      },
      async authorize(credentials) {
        console.log(credentials);
        const user = {
          id: 1,
          email: "fhmhaider19@gmail.com",
          name: "Fahim Haider",
          token: "123456789",
        }

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({session, token}) {
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: null,
  },
  // debug: true,
}

const handler = NextAuth(authOptions);
export {handler as POST, handler as GET}