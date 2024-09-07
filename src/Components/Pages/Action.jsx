import React, { useState } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information

function Action() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to go to the next movie
  const handleNext = () => {
    if (currentVideoIndex < movies.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  // Function to go to the previous movie
  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const actionMovies = movies.filter((movie) => movie.Category === "Action");
  console.log(actionMovies.length);
  return (
    <div>
      <h2>Action</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        <div>
          {/* Render only the current movie */}
          <YoutubePlayer
            title={actionMovies[currentVideoIndex].title}
            URL={actionMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <button onClick={handlePrev} disabled={currentVideoIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentVideoIndex === actionMovies.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
