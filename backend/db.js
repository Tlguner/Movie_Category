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

// Load environment variables from .env file
dotenv.config();

// Film şeması
const movieSchema = new mongoose.Schema({
  title: String,
  url: String,
  category: String,
});

// MongoDB Atlas connection URI
const MONGO_URI = process.env.MONGO_URI;
console.log("MongoDB URI:", MONGO_URI); // Check if this logs correctly

// MongoDB'ye bağlanma fonksiyonu
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Şemadan model oluştur
const Movie = mongoose.model("movie", movieSchema);

export { connectDB, Movie };
