import React, { useEffect, useState } from "react";
import "./successcard.css";

const SuccessCard = ({ item }) => {
  const { imagePath, number, heading } = item;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 0.1);

    return () => clearInterval(interval);
  }, [count, number]);

  return (
    <div className="successCard-container flex justify-center w-full align-items-center">
      <div className="success-card text-white text-center">
        <div className="success-image d-block w-full">
          <img src={imagePath} alt={heading} />
        </div>
        <div className="success-details uppercase mt-2">
          <p className="count-number font-bold mt-2">{count}+</p>
          <h3>{heading}</h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
