/* app / utils / db / index.ts */

import { drizzle } from "drizzle-orm/libsql";

import env from "../env";
import * as schema from "./schema";
console.log({
  url: process.env.TURSO_DATABASE_URL,
  tokenExists: !!process.env.TURSO_AUTH_TOKEN,
});
const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
  schema,
});

export default db;
