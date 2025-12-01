import jwt from "jsonwebtoken";
import pool from "../config.db.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: "not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JTW_SECRET);

    const user = await pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [decoded.id]
    );

    if (user.rows.length === 0) {
      return res
        .status(401)
        .json({ message: "Not authorized, user not found" });
    }

    req.user = user.rows[0];
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "not authorized, token failed" });
  }
};
