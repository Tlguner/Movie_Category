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
        const response = await axios.get("/api/movies");
        console.log("API Response status:", response.status);
        console.log("API Response data type:", typeof response.data);

        // Veri tipini kontrol et
        if (Array.isArray(response.data)) {
          const filteredMovies = response.data.filter(
            (movie) => movie.category === "Drama"
          );
          setActionMovies(filteredMovies);
        } else {
          console.error("API returned non-array data:", response.data);
          // Eğer string ise ve HTML içeriyorsa
          if (
            typeof response.data === "string" &&
            response.data.includes("<!doctype html>")
          ) {
            console.error(
              "API endpoint returned HTML instead of JSON - check Vercel configuration"
            );
          }
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        console.error("Error response:", error.response?.data);
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
