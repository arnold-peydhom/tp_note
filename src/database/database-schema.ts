import { createId } from "@paralleldrive/cuid2";
import { timestamps } from "./database.helper";
import { pgEnum, pgTable, text, serial } from "drizzle-orm/pg-core";

export const usersRoleEnum = pgEnum('role', ['admin', 'user']);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text().notNull().unique(),
    email: text().notNull().unique(),
    password: text().notNull().unique(),
    role: usersRoleEnum().notNull().default('user'),
    ...timestamps,
});

export const contacts = pgTable('contacts', {
    id: serial('id').primaryKey(),
    contact_id: text().notNull().references(() => users.id),
    contact_name: text().notNull(), 
    phone_number: text().notNull(),
    email: text().notNull().unique(),
    address: text().notNull(),
    notes: text().notNull(),
    ...timestamps,
  });

export const databaseSchema = {
    users, contacts,
};
