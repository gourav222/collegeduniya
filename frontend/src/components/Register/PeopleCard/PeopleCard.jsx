import React, { useState } from "react";
import prev from "../../../Images/prev.png";
import next from "../../../Images/next.png";
import profile from "../../../Images/profile.png";
import peoplesData from "../../../constants/PeopleData";
import "./PeopleCard.css";
const PeopleCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentCardIndex(currentCardIndex - 1);
  };
  const handleNext = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  }
  return (
    <div className="people-card">
      {currentCardIndex > 0 && (
        <div onClick={handlePrevious} className="people-button">
          <img src={prev} alt="" />
        </div>
      )}
      <div className="people-card-detail">
        <div className="people-card-img">
          <img src={profile} alt="" />
        </div>
        <div className="people-card-text">
          <p>{peoplesData[currentCardIndex].comment}</p>
          <span>{peoplesData[currentCardIndex].name}</span>
        </div>
      </div>
      {currentCardIndex < peoplesData.length - 1 && (
        <div onClick={handleNext} className="people-button">
          <img src={next} alt="" />
        </div>
      )}
    </div>
  );
};

export default PeopleCard;
