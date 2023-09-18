import type { Config } from "drizzle-kit";
import { config } from "dotenv";

config();

export default {
  schema: "./src/app/_data/schema.ts",
  out: "./.migrations",
  driver: "turso",
  dbCredentials: {
    url: `${process.env.DATABASE_URI}`,
    authToken: `${process.env.DATABASE_AUTH_TOKEN}`,
  },
} satisfies Config;
