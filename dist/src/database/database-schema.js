"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseSchema = exports.contacts = exports.users = exports.usersRoleEnum = void 0;
const cuid2_1 = require("@paralleldrive/cuid2");
const database_helper_1 = require("./database.helper");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersRoleEnum = (0, pg_core_1.pgEnum)('role', ['admin', 'user']);
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.text)()
        .primaryKey()
        .$defaultFn(() => (0, cuid2_1.createId)()),
    username: (0, pg_core_1.text)().notNull().unique(),
    email: (0, pg_core_1.text)().notNull().unique(),
    password: (0, pg_core_1.text)().notNull().unique(),
    role: (0, exports.usersRoleEnum)().notNull().default('user'),
    ...database_helper_1.timestamps,
});
exports.contacts = (0, pg_core_1.pgTable)('contacts', {
    id: (0, pg_core_1.text)()
        .primaryKey()
        .$defaultFn(() => (0, cuid2_1.createId)()),
    user_id: (0, pg_core_1.text)().notNull().references(() => exports.users.id),
    contact_name: (0, pg_core_1.text)().notNull(),
    phone_number: (0, pg_core_1.text)().notNull(),
    email: (0, pg_core_1.text)().notNull().unique(),
    address: (0, pg_core_1.text)().notNull(),
    notes: (0, pg_core_1.text)().notNull(),
    ...database_helper_1.timestamps,
});
exports.databaseSchema = {
    users: exports.users, contacts: exports.contacts,
};
//# sourceMappingURL=database-schema.js.map