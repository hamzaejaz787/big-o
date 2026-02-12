import { pgTable, serial, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const subscriberEmailTable = pgTable("subscribers", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
