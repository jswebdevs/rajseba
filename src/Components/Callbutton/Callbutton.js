// CallButton.js
import React from "react";
import "./callbutton.css"; // Create a CSS file for styling the button
import { Link } from "react-router-dom";

const CallButton = () => {
  return (
    <button>
        <Link to ="tel:+8801813333373" target="_blank" className="fixed-call-button text-xl md:text-2xl text-bold"> Book Now </Link>
    </button>
  );
};

export default CallButton;
