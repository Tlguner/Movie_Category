import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "../youtube";
//import movies from "../data"; // Array holding the movie information
import Button from "../button";
import useDebounce from "../hooks/useDebounce"; // Import the debounce hook
import axios from "axios";

function Movie() {
  {
    /*
  // State to track the current movie index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const debouncedVideoIndex = useDebounce(currentVideoIndex, 300); // 100ms debounce delay
  const [currentVideo, setCurrentVideo] = useState(movies[0]);

  // Update the current video whenever the debounced index changes
  useEffect(() => {
    setCurrentVideo(movies[debouncedVideoIndex]);
  }, [debouncedVideoIndex, movies]);
*/
  }
  //test
  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        setTest(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div>
        <h2>Movie Navigation</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="card">
        {/*
        {currentVideo && (
          <YoutubePlayer
            key={currentVideo.URL} // Force re-render by changing the key
            URL={currentVideo.URL}
            title={currentVideo.title}
          />
        )}
        
        <Button
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
          movies={movies}
        />
        */}
        {/* getting the data from the db*/}
        <div>
          <h1>Movies</h1>
          <ul>
            {test.map((test) => (
              <li key={test._id}>{test.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Movie;
