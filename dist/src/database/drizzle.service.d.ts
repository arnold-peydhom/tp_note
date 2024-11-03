import { databaseSchema } from "./database-schema";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
export declare class DrizzleService {
    private readonly pool;
    db: NodePgDatabase<typeof databaseSchema>;
    constructor(pool: Pool);
}
