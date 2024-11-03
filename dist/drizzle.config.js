"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const drizzle_kit_1 = require("drizzle-kit");
require("dotenv/config");
const configService = new config_1.ConfigService();
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: './src/database/database-schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host: configService.get('POSTGRES_HOST') || 'localhost',
        port: configService.get('POSTGRES_PORT') || 5432,
        user: "nest_user",
        password: "nest_password",
        database: configService.get('POSTGRES_DB'),
        ssl: false,
    },
});
//# sourceMappingURL=drizzle.config.js.map