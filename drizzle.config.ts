import { ConfigService } from "@nestjs/config";
import { defineConfig } from "drizzle-kit";
import 'dotenv/config'

const configService = new ConfigService();


export default defineConfig({
  schema: './src/database/database-schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: configService.get<string>('POSTGRES_HOST', 'localhost'),
    port: configService.get<number>('POSTGRES_PORT', 1234),
    user: configService.get<string>('POSTGRES_USER')!,
    password: configService.get<string>('POSTGRES_PASSWORD')!,
    database: configService.get<string>('POSTGRES_DB')!,
    ssl: false,
  },

})

