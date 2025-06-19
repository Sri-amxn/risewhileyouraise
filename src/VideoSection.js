import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
      <iframe
          className="video"
          src="https://www.youtube.com/embed/RNJrPZhISb4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info">
        <div className="info-box">
          <p className="info-value">10</p>
          <p className="info-label">Hours</p>
        </div>
        <div className="info-box">
          <p className="info-value">12</p>
          <p className="info-label">Modules</p>
        </div>
        <div className="info-box">
          <p className="info-value">5</p>
          <p className="info-label">Reflective Exercises</p>
        </div>
        <div className="info-box">
          <p className="info-value">6</p>
          <p className="info-label">Reflective Audios</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
