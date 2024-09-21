import React, { useState, useEffect } from "react";
import YoutubePlayer from "../youtube";
import Button from "../button";
import axios from "axios";
import HomeButton from "./HomeButton";

function Drama() {
  const [actionMovies, setActionMovies] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Fetch action movies from the server
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.129:5000/api/movies"
        );
        const filteredMovies = response.data.filter(
          (movie) => movie.category === "Drama"
        );
        setActionMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h2>Drama</h2>
      <HomeButton />
      <div>
        <div className="drama-card">
          {/* Render only the current movie if data is available */}
          {actionMovies.length > 0 && (
            <>
              <YoutubePlayer
                title={actionMovies[currentVideoIndex].title}
                URL={actionMovies[currentVideoIndex].url}
              />
              {/* Navigation buttons */}
              <Button
                className="drama-btn"
                currentVideoIndex={currentVideoIndex}
                setCurrentVideoIndex={setCurrentVideoIndex}
                movies={actionMovies}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Drama;
