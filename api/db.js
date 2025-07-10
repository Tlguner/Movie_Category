import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env dosyasını root dizininden oku
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// Environment variables - Vercel'de MONGODB_URI kullanılacak
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

console.log("🔍 Environment Debug:");
console.log("Current directory:", __dirname);
console.log("MONGODB_URI found:", !!MONGODB_URI);
console.log(
  "MONGODB_URI value:",
  MONGODB_URI ? MONGODB_URI.substring(0, 20) + "..." : "NOT FOUND"
);

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const options = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(MONGODB_URI, options);
    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

// Film şeması
const movieSchema = new mongoose.Schema({
  title: String,
  url: String,
  category: String,
});

// Model tanımını tekrarlamamak için önbellekleme
const Movie = mongoose.models.movie || mongoose.model("movie", movieSchema);

export { connectDB, Movie };
