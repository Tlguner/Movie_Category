import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Action() {
  const actionMovies = movies.filter((movie) => movie.Category === "Action");

  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <div>
      <h2>Action</h2>
      <HomeButton />
      <div>
        <div className="action-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={actionMovies[currentVideoIndex].title}
            URL={actionMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            className="action-btn"
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={actionMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Action;
