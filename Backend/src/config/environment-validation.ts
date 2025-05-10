import "dotenv/config"
import { z } from "zod";
 
const envSchema = z.object({
  PORT: z.coerce.number(),
  USER_DB: z.string(),
  PASSWORD_DB: z.string()
});

export const env = envSchema.parse(process.env);
