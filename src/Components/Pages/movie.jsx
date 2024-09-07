import React, { useState } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";

function Movie() {
  // State to track the current movie index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to go to the next movie

  return (
    <div>
      <div>
        <h2>Movie Navigation</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="card">
        {/* Render only the current movie */}
        <YoutubePlayer
          URL={movies[currentVideoIndex].URL}
          title={movies[currentVideoIndex].title}
        />
        {/* Navigation buttons */}
        <Button
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
          movies={movies}
        />
      </div>
    </div>
  );
}

export default Movie;
