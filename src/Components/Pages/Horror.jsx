import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Horror() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const horrorMovies = movies.filter((movie) => movie.Category === "Horror");

  return (
    <div>
      <h2>Horror</h2>
      <HomeButton />
      <div>
        <div className="horror-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={horrorMovies[currentVideoIndex].title}
            URL={horrorMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={horrorMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Horror;
