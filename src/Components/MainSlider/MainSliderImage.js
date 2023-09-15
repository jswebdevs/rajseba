import React from "react";
import "./MainSlider.css";

const MainSliderImage = ({ sliderImage }) => {
  const { imagePath, caption1, caption2 } = sliderImage;

  return (
    <div className="main-slider-item">
      <img src={imagePath} alt="" />
      <div className="main-slider-caption text-center">
       <h3 className=" text-xl md:text-5xl caption1">{caption1}</h3>
       <h3 className=" text-xl md:text-5xl caption1">{caption2}</h3>
      </div>
    </div>
  );
}; 

export default MainSliderImage;
