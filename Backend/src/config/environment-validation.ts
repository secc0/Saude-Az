import "dotenv/config"
import { z } from "zod";
 
const envSchema = z.object({
  PORT: z.coerce.number(),
  USER_DB: z.string(),
  PASSWORD_DB: z.string(),
  JWT_SECRET: z.string(),
  NODE_ENV: z.enum(["develop", "homolog", "production"])
});

export const env = envSchema.parse(process.env);
