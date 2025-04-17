import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

/**
 * Fetches all email addresses from the users table.
 */
export const getAllEmails = async (): Promise<string[]> => {
  const [rows] = await pool.query('SELECT email FROM application');
  return (rows as { email: string }[]).map(row => row.email);
};

