"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrizzleService = void 0;
const common_1 = require("@nestjs/common");
const database_schema_1 = require("./database-schema");
const database_module_definition_1 = require("./database.module-definition");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
let DrizzleService = class DrizzleService {
    constructor(pool) {
        this.pool = pool;
        this.db = (0, node_postgres_1.drizzle)(this.pool, { schema: database_schema_1.databaseSchema });
    }
};
exports.DrizzleService = DrizzleService;
exports.DrizzleService = DrizzleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_definition_1.CONNECTION_POOL)),
    __metadata("design:paramtypes", [pg_1.Pool])
], DrizzleService);
//# sourceMappingURL=drizzle.service.js.map