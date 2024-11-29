// /api/movies.js
import { connectDB, Movie } from "./db.js";

export default async function handler(req, res) {
  await connectDB(); // Ensure MongoDB connection

  if (req.method === "GET") {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
