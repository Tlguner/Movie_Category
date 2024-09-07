import React, { useState } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information

function Thrill() {
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

  const thrillMovies = movies.filter((movie) => movie.Category === "Thrill");
  return (
    <div>
      <h2>Thriller</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        <div>
          {/* Render only the current movie */}
          <YoutubePlayer
            title={thrillMovies[currentVideoIndex].title}
            URL={thrillMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <button onClick={handlePrev} disabled={currentVideoIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentVideoIndex === thrillMovies.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thrill;
