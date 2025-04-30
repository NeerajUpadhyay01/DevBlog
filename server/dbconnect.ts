import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
const DatabaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_ProdUrl
    : process.env.DB_DevUrl;

console.log(DatabaseUrl);

const pool = new Pool({
  connectionString: DatabaseUrl,
  ssl: { rejectUnauthorized: false },
});
export default pool;
