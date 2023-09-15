// Gallery.js
import { React, useState, useEffect } from "react";
import "./homegallery.css";
import HomeGalleryImage from "./HomeGalleryImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeGallery = () => {
  const [homeGallery, setHomeGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/homegallery.json")
      .then((response) => response.json())
      .then((data) => {
        setHomeGallery(data);
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
    <div className="home-gallery-container">
        <div className="gallery-container text-center py-4 md:py-6">
      <h2 className="gallery-header text-black text-4xl md:text-5xl">সাম্প্রতিক সেবাসমূহ</h2>
      <h3 className="gallery-subheader text-secondary-color text-2xl">
        এক নজরে আমাদের সাম্প্রতিক সেবাসমূহ
      </h3>
      <p className="gallery-paragraph text-xl px-8">
        রাজসেবার প্রধাণ উদ্দেশ্য হচ্ছে রাজশাহীবাসীর দৈনন্দিন ঝামেলাগুলোর সহজ ও
        সুন্দর সমাধান প্রদান করা। সেই লক্ষ্যে আমাদের দক্ষ ও সৎ কর্মীগণ কাজ করে
        যান একনিষ্ঠভাবে।
      </p>

      <div className="home-gallery-slider mb-6">
        {loading ? (
          <p>Loading Gallery...</p>
        ) : (
          <Slider {...sliderSettings}>
            {homeGallery.map((hgimage) => (
              <HomeGalleryImage
                key={homeGallery.id}
                hgimage={hgimage}
              ></HomeGalleryImage>
            ))}
          </Slider>
        )}
      </div>
      <button>
        <a href="/gallery" className="global-blue-bg px-4 py-2 text-bold text-white uppercase mt-4 rounded-md">
          Show More
        </a>
      </button>
    </div>
    </div>
  );
};

export default HomeGallery;
