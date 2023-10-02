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

    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});

export { handler as GET, handler as POST };
