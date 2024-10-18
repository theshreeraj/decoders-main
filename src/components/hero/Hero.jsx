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
      <button className="cta-btn">Join In</button>
    </div>
  );
};

export default Hero;
