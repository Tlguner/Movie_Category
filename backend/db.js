import mongoose from "mongoose";

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

export { connectDB, Movie };
