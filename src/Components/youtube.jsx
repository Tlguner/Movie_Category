import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ title, URL }) => {
  // YouTube video options
  const opts = {
    width: "100%",
    borderRadius: "2rem",
    playerVars: { autoplay: 0 },
  };
  /*TO DO handle when you try to exit the website to quickly the youtube video will not be loaded so it throws error Cannot read properties of null (reading 'playVideo')
   */
  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div
        style={{
          minWidth: "350",
          width: "450px",
          maxWidth: "800px",
          margin: "auto",
          marginTop: "12px",
          minHeight: "150px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <YouTube videoId={URL} opts={opts} onReady={videoReady} />
        <h1 className="video-name-header">{title}</h1>
      </div>
    </>
  );
};

export default YoutubePlayer;
