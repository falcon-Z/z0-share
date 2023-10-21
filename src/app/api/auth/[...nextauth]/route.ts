import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

import { db } from "@falcon-z/app/_data/db";

const handler = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_OAUTH_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_OAUTH_CLIENT_SECRET}`,
    }),
  ],
});

export { handler as GET, handler as POST };
