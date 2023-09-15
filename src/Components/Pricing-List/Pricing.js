import React, { useState, useEffect } from "react";
import "./pricing.css";
import PricingCard from "./PricingCard";
import Slider from "react-slick";

const Pricing = () => {
  const [pricings, setPricings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/pricing.json")
      .then((response) => response.json())
      .then((data) => {
        setPricings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  // Configuration for the React Slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pricing-container-wrapper pt-4 md:pt-6">
      <div className="pricing-container text-center ">
        <h2 className="text-white text-bold text-4xl md:text-5xl">সেবার মূল্য</h2>
        <h3 className="text-white text-bold text-2xl">বেসিক সেবাসমূহের মুল্য</h3>
        <p className="text-white text-xl">
          সকল সেবাসমূহের মুল্য সাধারণত স্থান, অবস্থান, কোয়ালিটি ও সময়ভেদে
          পরিবর্তন হয়। নীচে কিছু বেসিক সেবাসমূহের মূল্যতালিকা দেয়া হলো।
        </p>

        <div className="pricing-slider md:flex">
        {loading ? (
            <p>Loading Prices...</p>
          ) : (
            <Slider {...sliderSettings}>
              {pricings.map((pricing) => <PricingCard key={pricings.id} pricing={pricing}></PricingCard>)}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
