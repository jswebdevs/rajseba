import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
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
    <div className="review-container-wrapper py-8">
      <div className="review-container text-center">
        <h2 className="text-white text-4xl md:text-6xl">সেবার রিভিউ</h2>
        <h3 className="text-white">আমাদের সেবার মান ও মন্তব্য</h3>
        <p className="text-white">
          আমরা সব সময়ই সেবা প্রদানের সময় আমাদের সর্বোচ্চ ও আন্তরিক চেস্টা করে
          থাকি। আমাদের কিছু সেবাগ্রহীতার মন্তব্য তুলে ধরা হলো।
        </p>

        <div className="review-card-section">
          {loading ? (
            <p>Loading reviews...</p>
          ) : (
            <Slider {...sliderSettings}>
              {reviews.map((review) => (
                <div key={review.id}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
