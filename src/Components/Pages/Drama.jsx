import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Drama() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const dramaMovies = movies.filter((movie) => movie.Category === "Drama");
  return (
    <div>
      <HomeButton />
      <div>
        <div className="drama-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={dramaMovies[currentVideoIndex].title}
            URL={dramaMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={dramaMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Drama;
