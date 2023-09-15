import React from "react";
import "./worksystem.css";

const WorkSystemCard = ({ item }) => {
  const { imagePath, heading, description } = item;

  return (
    <div className="worksystem-card text-center">
      <div className="worksystem-image">
        <img src= {imagePath} alt="" />
      </div>
      <h3 className="py-3">{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WorkSystemCard;
