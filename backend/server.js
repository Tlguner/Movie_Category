import express from "express";
import { connectDB, Movie } from "./lib/db.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
// CORS'u etkinleştirin
app.use(
  cors({
    origin: "*",
  })
);
// Route to get all movies
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
    console.log(movies);
    movies.map((a) => {
      console.log(a.title);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
