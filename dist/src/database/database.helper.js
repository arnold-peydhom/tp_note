"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamps = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.timestamps = {
    create_at: (0, pg_core_1.timestamp)().notNull().defaultNow(),
    update_at: (0, pg_core_1.timestamp)(),
};
//# sourceMappingURL=database.helper.js.map