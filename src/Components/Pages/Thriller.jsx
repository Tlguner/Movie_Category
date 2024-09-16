import React, { useState } from "react";
import YoutubePlayer from "../youtube";
import movies from "../data"; // Array holding the movie information
import Button from "../button";
import HomeButton from "./HomeButton";

function Thriller() {
  var [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const thrillMovies = movies.filter((movie) => movie.Category === "Thriller");
  return (
    <div>
      <HomeButton />
      <div>
        <div className="triller-card">
          {/* Render only the current movie */}
          <YoutubePlayer
            title={thrillMovies[currentVideoIndex].title}
            URL={thrillMovies[currentVideoIndex].URL}
          />
          {/* Navigation buttons */}
          <Button
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            movies={thrillMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Thriller;
