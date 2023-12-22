import React from "react";
import "./HelpCard.css"
const HelpCard = ({ image, title }) => {
  return (
    <div className="help-card">
      <div>
        <img src={image} alt="" className="help-card-img"/>
      </div>
      <div>
        <p className="help-card-title">{title}</p>
      </div>
    </div>
  );
};

export default HelpCard;
