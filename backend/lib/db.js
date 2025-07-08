import mongoose from "mongoose";
import dotenv from "dotenv";
/*
// Film şeması
const movieSchema = new mongoose.Schema({
  title: String,
  url: String,
  category: String,
});

// Şemadan model oluştur
const Movie = mongoose.model("movie", movieSchema);

// MongoDB'ye bağlanma fonksiyonu
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/movies", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
*/

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
console.log("MongoDB URI:", MONGO_URI); // yerelde test için

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return; // tekrar bağlantı yapılmaz

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "test", // veritabanı adı URI içinde yoksa burada tanımlanır
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

// Tekrar model tanımını önle
const movieSchema = new mongoose.Schema({
  title: String,
  url: String,
  category: String,
});

const Movie = mongoose.models.Movie || mongoose.model("movies", movieSchema);

export { connectDB, Movie };
