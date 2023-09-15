import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.css";
import MainSliderImage from "./MainSliderImage";

const MainSlider = () => {
  const [mainSlider, setMainSlider] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the slider data asynchronously
    fetch("/mainSlider.json")
      .then((response) => response.json())
      .then((data) => {
        setMainSlider(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching slider images:", error);
        setLoading(false);
      });
  }, []);

  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="main-slider">
      {loading ? (
        <p>Loading Slides</p>
      ) : (
        <Slider {...sliderSettings}>
          {mainSlider.map((sliderImage) => (
            <MainSliderImage key={sliderImage.id} sliderImage={sliderImage} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MainSlider;
