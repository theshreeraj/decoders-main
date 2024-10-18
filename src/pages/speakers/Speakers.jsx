import React from "react";
import "./Speakers.css";
import GuestCard from "../../components/guestCard/GuestCard";

const Speakers = (props) => {
  return (
    <div className="speakers-container">
      <GuestCard spekerName="John" SpeakersDesignation="Developer" />
      <GuestCard spekerName="Jane" SpeakersDesignation="Designer" />
      <GuestCard spekerName="Mike" SpeakersDesignation="Manager" />
      <GuestCard spekerName="Alice" SpeakersDesignation="Product Owner" />
      <GuestCard spekerName="Bob" SpeakersDesignation="QA Engineer" />
      <GuestCard spekerName="Emily" SpeakersDesignation="DevOps" />
    </div>
  );
};

export default Speakers;
