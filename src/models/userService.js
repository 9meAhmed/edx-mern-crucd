import pool from "../config/db.js";

const getUserById = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};

const createUser = async (userData) => {
  const client = await pool.connect();
  try {
    const { name, email } = userData;
    const result = await client.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default {
  getUserById,
  createUser,
};
