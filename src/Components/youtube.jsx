import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ title, URL }) => {
  const [isLoading, setIsLoading] = useState(true); // For showing the spinner
  const [player, setPlayer] = useState(null); // For storing the YouTube player

  // YouTube video options
  const opts = {
    width: "100%",
    borderRadius: "2rem",
    playerVars: { autoplay: 0 },
  };

  // Function to handle when the video is ready
  const videoReady = (event) => {
    try {
      const playerInstance = event.target;
      playerInstance.pauseVideo(); // Pause video initially
      setPlayer(playerInstance); // Store the player instance
      setIsLoading(false); // Hide the spinner
    } catch (error) {
      console.error("Error loading the video:", error); // Catch any errors
    }
  };

  // Cleanup when the component unmounts to prevent errors
  useEffect(() => {
    return () => {
      if (player) {
        player.destroy(); // Clean up the player
      }
    };
  }, [player]);

  return (
    <>
      <div className="youtube-player-container">
        {/* Show the spinner while the video is loading */}
        {isLoading && <div className="spinner"></div>}

        {/* YouTube player */}
        <YouTube videoId={URL} opts={opts} onReady={videoReady} />

        {/* Video title */}
        <h1 className="video-name-header">{title}</h1>
      </div>
    </>
  );
};

// Simple spinner styles (you can add this to your CSS or inline)
const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.5rem",
  color: "#000",
};

export default YoutubePlayer;
