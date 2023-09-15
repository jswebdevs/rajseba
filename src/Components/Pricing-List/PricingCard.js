import React from "react";
import './pricing.css';

const PricingCard = ({ pricing }) => {
  const { price, service, detailsLink, description, condition } = pricing;

  return (
    <div className="pricing-card-container">
      <div className="pricing-card">
        <div className="price my-4 text-bold text-black text-4xl md:text-6xl"><span><sup>&#2547;</sup></span>{price}</div>
        <h3 className="service my-2 text-bold text-black">{service}</h3>
        <button><a href={detailsLink} className="details-button my-3">
          বিস্তারিত দেখুন
        </a></button>
        <p className="description my-1">{description}</p>
        <p className="condition my-1 text-bold text-black text-md py-3 rounded-md">*{condition}</p>
      </div>
    </div>
  );
};

export default PricingCard;
