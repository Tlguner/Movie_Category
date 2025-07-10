// /api/movies.js
import { connectDB, Movie } from "./db.js";

export default async function handler(req, res) {
  console.log("🔍 API Debug:");
  console.log("Environment variables:", {
    MONGO_URI: process.env.MONGO_URI ? "✅ Found" : "❌ Not found",
    MONGODB_URI: process.env.MONGODB_URI ? "✅ Found" : "❌ Not found",
  });

  try {
    await connectDB(); // Ensure MongoDB connection

    if (req.method === "GET") {
      try {
        const movies = await Movie.find();
        console.log("✅ Movies fetched:", movies.length);
        res.status(200).json(movies);
      } catch (error) {
        console.error("❌ Database error:", error);
        res
          .status(500)
          .json({ error: "Failed to fetch movies", details: error.message });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("❌ Connection error:", error);
    res
      .status(500)
      .json({ error: "Database connection failed", details: error.message });
  }
}
