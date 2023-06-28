import { NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

import connect from "@/utils/db";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",

      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          console.log(user);

          return new Response("Hello World");
        } catch (error) {
          console.log(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
