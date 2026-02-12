import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

config({ path: ".env.local" });

const connectionString = process.env.DB_URL!;

const queryClient = postgres(connectionString, { prepare: false });
export const db = drizzle(queryClient, { schema, logger: true });
