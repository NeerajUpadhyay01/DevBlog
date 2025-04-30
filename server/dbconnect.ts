import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
const DatabaseUrl = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_Database}`;

console.log(DatabaseUrl);

const pool = new Pool({
  connectionString: DatabaseUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;
