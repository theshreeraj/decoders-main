import React from "react";
import "./GuestCard.css";
import guest1 from "../../assets/guest1.jpeg";

const GuestCard = ({ spekerName, SpeakersDesignation }) => {
  return (
    <div className="guest-card-container">
      <div className="guest-card-dp">
        <img src={guest1} alt="" />
      </div>
      <p>{spekerName}</p>
      <p>{SpeakersDesignation}</p>
    </div>
  );
};

export default GuestCard;
