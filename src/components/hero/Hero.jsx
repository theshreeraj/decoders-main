import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">Decoders Club</h1>
      <p className="hero-description">
        A community of Designers & Developers Jamming together every Saturday &
        Sunday
      </p>
      <a
        href="https://chat.whatsapp.com/F8YBIaTYsNNDU0Axde9Ey5"
        target="_blank"
        rel="noreferrer"
      >
        <button className="cta-btn">Join In</button>
      </a>
    </div>
  );
};

export default Hero;
