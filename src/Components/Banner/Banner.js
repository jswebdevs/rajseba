import React from 'react';
import './banner.css';
import phoneImage from './telephone.webp';
import appImage1 from './google_play_icon.webp';
import appImage2 from './app_store_icon.webp';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner-container text-black global-blue-bg">
      <div className="banner-content">
        <h1 className="heading lg:text-5xl">এক কলেই সব সেবা</h1>
        <div className="telephone-container">
          <div className="telephone-icon">
          <Link to ='tel:+8801813333373'>
            <img src={phoneImage} alt="Telephone" className="telephone-image" />
          </Link>
          </div>
          <Link to ='tel:+8801813333373' className="telephone-number text-4xl lg:text-8xl">+8801813333373</Link>
        </div>
        <div className="apps-container">
          <p className="apps-text">Our apps are on the way</p>
          <div className="app-images">
            <a href="link_to_app_1" target="_blank" rel="noopener noreferrer">
              <img src={appImage1} alt="Play Store Icon" className="app-image" />
            </a>
            <a href="link_to_app_2" target="_blank" rel="noopener noreferrer">
              <img src={appImage2} alt="App Store Icon" className="app-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
