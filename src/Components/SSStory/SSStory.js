import React, { useState, useEffect } from "react";
import SuccessCard from "../SuccessCard/SuccessCard";
import "./ssstory.css";

const SSStory = () => {
  const [successData, setSuccessData] = useState([]);

  useEffect(() => {
    // Fetch successData from successData.json
    fetch("/successData.json")
      .then((response) => response.json())
      .then((data) => setSuccessData(data))
      .catch((error) => console.error("Error fetching successData:", error));
  }, []);

  return (
    <div className="success-container-wrapper pt-6 pb-6 text-white text-center">
      <div className="success-story-container">
        <h2 className="p-2 text-4xl md:text-6xl text-white">সফলতার গল্প</h2>
        <h3 className="p-2">এক নজরে আমাদের পরিসংখ্যান</h3>
        <p className="px-6">
          আমাদের সম্পন্নকৃত কাজ, সেবাগ্রহীতা, তাদের রেটিং ও আমাদের দক্ষ কর্মীর
          সংখ্যা দেখুন, নিজেকে যাচাই করুন। আপনাদের সকল সেবা দরজায় পৌছে দিতে
          রাজসেবা সর্বদা প্রস্তুত।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-8 text-center">
          {successData.map((item) => (
            <SuccessCard key={successData.id} item={item}></SuccessCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SSStory;
