import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Comedy() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const comedyMovies = movies.filter((movie) => movie.Category === "Comedy");
  return (
    <div>
      <h2>Comedy</h2>
      <HomeButton />
      <div>
        <div className="comedy-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={comedyMovies[currentVideoIndex].title}
            URL={comedyMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={comedyMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Comedy;
