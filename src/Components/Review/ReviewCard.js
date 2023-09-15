import React from "react";
import "./review.css";

const ReviewCard = ({ review }) => {
  const { "review-title": reviewTitle, "title-bg": titleBg, name, designation, institution, review: reviewText, rating, image } = review;

  return (
    <div className="review-card p-3 rounded-md">
      <div className="service-title text-3xl p-2 rounded-md font-bold" style={{ backgroundColor: `#${titleBg}` }}>
        {reviewTitle}
      </div>
      <div className="rating text-white text-xl">
        Rating: {rating}
      </div>
      <div className="review-content">
        <p className="text-white"> {reviewText}</p>
      </div>
      <div className="reviewer-details">
        <div className="reviewer-image" style={{ border: `2px solid #${titleBg}`}}>
          <img src={image} alt="" />
        </div>
        <div className="reviewer-info">
          <p className="reviewer-name">{name}</p>
          <p className="reviewer-designation">{designation}, {institution}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
