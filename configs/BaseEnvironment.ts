import { config } from "dotenv";

config({ path: ".env.local" });

export type Environment = "development" | "production" | "test";

export class BaseEnvironment {
  defaultEnvironmentValues = {
    GOOGLE_GEMENI_API_KEY: "my-api-key",
    DRIZZLE_DATABASE_URL: "postgresql://myuser:mypassword@mydbhost.com/mydatabase",
  };

  get environment(): Environment {
    return process.env.NODE_ENV as Environment;
  }

  get GOOGLE_GEMENI_API_KEY(): string {
    return (
      process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY! ||
      this.defaultEnvironmentValues.GOOGLE_GEMENI_API_KEY
    );
  }

  get DRIZZLE_DATABASE_URL(): string {
    return (
      process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL! ||
      this.defaultEnvironmentValues.DRIZZLE_DATABASE_URL
    );
  }
}
