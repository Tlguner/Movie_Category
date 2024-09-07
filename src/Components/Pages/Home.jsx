import React from "react";
import { Link } from "react-router-dom";
import movies from "../data";

function Home() {
  // Create a Set to store unique categories
  const uniqueCategories = new Set();

  // Filter the movies array to get unique categories
  const uniqueMovies = movies.filter((movie) => {
    if (!uniqueCategories.has(movie.Category)) {
      uniqueCategories.add(movie.Category);
      return true;
    }
    return false;
  });
  return (
    <div>
      <h2>Home</h2>
      <Link to="/movie">
        <button>Movie Page</button>
      </Link>

      {uniqueMovies.map((movie) => (
        <Link to={`/${movie.Category.toLowerCase()}`}>
          <button className="movie-btn" key={movie.id}>
            {movie.Category}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Home;
