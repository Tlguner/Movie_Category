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
  //fetch movies from backendAPI
  const fetchMovies = async () => {
    try {
      let response = await fetch("http://192.168.1.129:5000/api/movies");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="home-header">Home</h2>

      {/*test*/}

      <Link to="/movie">
        {" "}
        FOR DEBUGGING
        <button>Movie Page</button>
      </Link>

      {uniqueMovies.map((movie) => (
        <Link to={`/${movie.Category.toLowerCase()}`}>
          {/* Dynamically apply a CSS class based on the category */}
          <button className={`movie-btn ${movie.Category.toLowerCase()}-btn`}>
            {movie.Category}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Home;
