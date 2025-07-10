# Movie Category Website

A full-stack React application that categorizes movies and displays their trailers, with data sourced from IMDb Top 1000 movies.

## 🎬 Features

- **Movie Categories**: Action, Comedy, Drama, Thriller, Horror, Romance
- **YouTube Trailers**: Embedded trailers for each movie
- **Responsive Design**: Modern and clean UI
- **MongoDB Integration**: Dynamic data fetching from database
- **Search Functionality**: Find movies easily
- **Vercel Deployment**: Deployed with serverless functions

## 🚀 Live Demo

[View Live Website](https://movie-category.vercel.app/#/)

⚠️ **Note**: This project uses MongoDB Atlas Free Tier. If the database hasn't been accessed for a while, the cluster may go to sleep, causing temporary data loading issues. The cluster will automatically wake up after the first request.

## 🛠️ Tech Stack

**Frontend:**

- React 18
- React Router DOM
- Axios for API calls
- CSS3 for styling

**Backend:**

- Node.js (Vercel serverless functions)
- MongoDB with Mongoose
- Express.js

**Data Processing:**

- Python 3
- Pandas for data manipulation
- YouTube Search API

## 📊 Python Data Processing Script

The `scripts/imdb_1000.py` script processes IMDb Top 1000 movies data and generates YouTube trailer URLs.

### What the Script Does:

1. **Data Loading**: Reads IMDb Top 1000 CSV file
2. **Genre Filtering**: Filters movies to 6 main categories (Action, Comedy, Drama, Thriller, Horror, Romance)
3. **YouTube Search**: Automatically finds trailers on YouTube for each movie
4. **Data Export**: Generates `trailers.json` with movie data ready for MongoDB

### Script Code Overview:

```python
# Genre filtering
allowed_genres = {'Comedy', 'Action', 'Drama', 'Thriller', 'Horror', 'Romance'}

# YouTube search for each movie
results = YoutubeSearch(f"{title} Trailer", max_results=1).to_dict()

# Extract video ID
video_id = video['url_suffix'].split("v=")[-1].split("&")[0]
```

### Script Features:

- **Genre Validation**: Only processes movies with allowed genres
- **Automated Trailer Search**: Uses YouTube Search API to find trailers
- **Video ID Extraction**: Extracts YouTube video IDs for embedding
- **JSON Export**: Creates properly formatted data for database import

### How to Run the Script:

1. **Install Dependencies:**

   ```bash
   pip install pandas youtube-search-python
   ```

2. **Prepare Data:**

   - Ensure `imdb_top_1000.csv` is in the `scripts/` folder
   - The CSV should contain columns: `Series_Title`, `Genre`

3. **Run the Script:**

   ```bash
   cd scripts/
   python imdb_1000.py
   ```

4. **Output:**
   - Generates `trailers.json` with movie data
   - Each entry contains: `title`, `category`, `url` (YouTube video ID)

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- Python 3.x
- MongoDB Atlas account
- Git

### Frontend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tlguner/Movie_Category.git
   cd Movie_Category
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create `.env` file in root directory:

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/movies
   ```

4. **Run locally:**
   ```bash
   npm start
   ```

### Data Processing (Optional)

If you want to regenerate the movie data:

1. **Setup Python environment:**

   ```bash
   cd scripts/
   pip install pandas youtube-search-python
   ```

2. **Run the data processor:**

   ```bash
   python imdb_1000.py
   ```

3. **Import to MongoDB:**
   - Use the generated `trailers.json` to populate your MongoDB collection
   - Each document should have: `title`, `category`, `url`

### Deploy to Vercel

1. **Connect to GitHub:**

   - Import project from GitHub to Vercel
   - Set environment variables in Vercel dashboard

2. **Environment Variables:**

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Deploy:**
   - Vercel automatically builds and deploys
   - API routes in `/api` folder work as serverless functions

## 🎯 API Endpoints

## 👨‍💻 Author

**Tolga Üner**

- GitHub: [@Tlguner](https://github.com/Tlguner)
- Project Link: [Movie Category Website](https://github.com/Tlguner/Movie_Category)

## 📝 Additional Notes

- **MongoDB Free Tier**: This project uses MongoDB Atlas Free Tier which may cause the cluster to sleep after periods of inactivity. If you experience loading issues, please wait a moment for the database to wake up.
- **Data Source**: Movie data is sourced from IMDb Top 1000 movies list and processed using the included Python script.
- **Responsive Design**: The application is fully responsive and works on desktop, tablet, and mobile devices.

![Home Page](https://github.com/user-attachments/assets/92b50669-7b21-4fb6-a15a-6e7c738058aa)

![Drama Category](https://github.com/user-attachments/assets/c0bbeabf-6c6e-41d3-b781-edbb6e16167d)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

## 👨‍💻 Author

**Tolga Üner**

- GitHub: [@Tlguner](https://github.com/Tlguner)
- Project Link: [Movie Category Website](https://github.com/Tlguner/Movie_Category)
