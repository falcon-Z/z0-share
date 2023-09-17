import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: `${process.env.DATABASE_URI}`,
  authToken: `${process.env.DATABASE_AUTH_TOKEN}`,
});

export const db = drizzle(client);
