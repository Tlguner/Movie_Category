import React, { useState } from "react";

function Button({ movies, setCurrentVideoIndex, currentVideoIndex }) {
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

  return (
    <div>
      {/* Navigation buttons */}
      <button onClick={handlePrev} disabled={currentVideoIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentVideoIndex === movies.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Button;
