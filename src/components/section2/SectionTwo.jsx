import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="sectionTwo-container">
      <h1 className="sectionTwo-heading">People. Culture. Code.</h1>

      <div className="culture-vid-container">
        <iframe
          src="https://player.vimeo.com/video/957027802?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>

      <div className="speaker-container">
        <div className="speaker-card speaker-card1">
          <h1 className="speaker-card-heading">Stay Ahead Always</h1>
        </div>
        <div className="speaker-card speaker-card2">
          <h1 className="speaker-card-heading">Foster team growth</h1>
        </div>
        <div className="speaker-card speaker-card3">
          <h1 className="speaker-card-heading">Learn by doing</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
