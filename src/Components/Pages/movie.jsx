import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "../youtube"; // Correct reference to youtube.jsx
import axios from "axios";
import Button from "../button"; // Correct reference to button.jsx

function Movie() {
  const [test, setTest] = useState([]); // Movies fetched from the server
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track the current video index
  const [currentVideo, setCurrentVideo] = useState(null); // Store the current video data

  // Fetch movies from the server when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.129:5000/api/movies"
        );
        setTest(response.data); // Store fetched movies in the state
        setCurrentVideo(response.data[0]); // Set the first movie as the initial current video
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Update the current video when the currentVideoIndex changes
  useEffect(() => {
    if (test.length > 0) {
      setCurrentVideo(test[currentVideoIndex]);
    }
  }, [currentVideoIndex, test]);

  return (
    <div>
      <div>
        <h2>Movie Navigation</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="card">
        {/* Conditionally render the YouTube player if currentVideo is available */}
        {currentVideo && (
          <YoutubePlayer
            key={currentVideo._id} // Unique key for re-rendering
            URL={currentVideo.url} // Pass the video URL from the fetched data
            title={currentVideo.title} // Pass the video title from the fetched data
          />
        )}

        {/* Pass the necessary props to the Button component for navigation */}
        <Button
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
          movies={test} // Pass the fetched movies for navigation
        />

        {/* Display the fetched movies */}
        <div>
          <h1>Movies</h1>
          <ul>
            {test.map((movie) => (
              <li key={movie._id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Movie;
