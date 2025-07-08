import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch movies from MongoDB
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies");
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          console.error("API returned non-array data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Get unique categories from MongoDB data
  const uniqueCategories = [...new Set(movies.map((movie) => movie.category))];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="home-header">Home</h2>

      {uniqueCategories.map((category) => (
        <Link key={category} to={`/${category.toLowerCase()}`}>
          <button className={`movie-btn ${category.toLowerCase()}-btn`}>
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Home;
