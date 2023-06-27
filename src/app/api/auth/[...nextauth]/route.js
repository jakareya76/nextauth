import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import connect from "@/utils/db";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
