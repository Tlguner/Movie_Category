import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Romance() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const romanceMovies = movies.filter((movie) => movie.Category === "Romance");
  return (
    <div>
      <h2>Romance</h2>
      <HomeButton />
      <div>
        <div className="romance-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={romanceMovies[currentVideoIndex].title}
            URL={romanceMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={romanceMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Romance;
