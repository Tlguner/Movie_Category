import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ title, URL }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState(null);

  const opts = {
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  const videoReady = (event) => {
    try {
      const playerInstance = event.target;
      playerInstance.pauseVideo();
      setPlayer(playerInstance);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading the video:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [player]);

  return (
    <div className="youtube-player-container">
      {isLoading && <div className="spinner"></div>}
      <YouTube videoId={URL} opts={opts} onReady={videoReady} />
      <h1 className="video-name-header">{title}</h1>
    </div>
  );
};

export default YoutubePlayer;
