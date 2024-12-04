import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Button({ movies, setCurrentVideoIndex, currentVideoIndex }) {
  // Function to go to the next movie
  const handleNext = () => {
    if (currentVideoIndex < movies.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1); // Increase the index by 1
    }
  };

  // Function to go to the previous movie
  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1); // Decrease the index by 1
    }
  };

  return (
    <div>
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        disabled={currentVideoIndex === 0} // Disable the "Prev" button at the first video
        className="back-btn"
      >
        <IoIosArrowRoundBack className="arrow-icon" />
      </button>
      <button
        onClick={handleNext}
        disabled={currentVideoIndex === movies.length - 1} // Disable the "Next" button at the last video
        className="next-btn"
      >
        <IoIosArrowRoundForward className="arrow-icon" />
      </button>
    </div>
  );
}

export default Button;
