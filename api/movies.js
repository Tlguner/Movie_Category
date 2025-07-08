// /api/movies.js
import { connectDB, Movie } from "./db.js";

export default async function handler(req, res) {
  // CORS headers for cross-origin requests
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    try {
      await connectDB();
      const movies = await Movie.find();
      console.log(`Found ${movies.length} movies in database`);
      res.status(200).json(movies);
    } catch (error) {
      console.error("API Error:", error);
      res
        .status(500)
        .json({ error: "Failed to fetch movies", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
