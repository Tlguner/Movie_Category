import express from "express";
import { connectDB, Movie } from "./db.js";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
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
