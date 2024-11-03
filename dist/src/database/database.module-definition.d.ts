export interface DatabaseOptions {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}
export declare const CONNECTION_POOL = "CONNECTION_POOL";
export declare const ConfigurableDatabaseModule: import("@nestjs/common").ConfigurableModuleCls<DatabaseOptions, "forRoot", "create", {}>, DATABASE_OPTIONS: string | symbol;
