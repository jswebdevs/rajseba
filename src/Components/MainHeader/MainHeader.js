import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../Images/icons/Logo-Header.png";
import "./mainheader.css";

import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainHeader = () => {

  return (
    <div>
      <>
        {/* Header for PC devices */}
        <header className="bg-transparent text-black py-4 px-6 hidden lg:flex mainHeader-wrapper">
          <div className="container mx-auto flex justify-between items-center mainHeader">
            {/* Logo (Replace with your logo image or text) */}
            <div className="logo-section">
              <Link to="\">
                <img src={logo} alt="Logo" className="header-logo" />
              </Link>
            </div>

            {/* Right side of Header */}
            <div className="flex space-x-6 ador-regular">
              {/* Service Time */}
              <div className="flex items-center">
                <div className="service-time-icon mx-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="global-blue-bg p-2"
                  />
                </div>
                <div className="service-time-info ">
                  <h6>সেবাগ্রহণের সময়ঃ</h6>
                  <p>Sat to Fri: 8AM - 10 PM</p>
                </div>

                {/* Replace with your service time */}
              </div>

              {/* Call to Action (Replace the link with your desired call-to-action page) */}
              <div className="header-call-section flex">
                <div className="call-now-header-icon mx-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="global-blue-bg p-2"
                  />
                </div>
                <div className="call-now-header-info">
                  <Link to="tel:+8801813333373">
                    <h6>কল করুন এখনইঃ</h6>
                    <p>০১৮১৩৩৩৩৩৭৩</p>
                  </Link>
                </div>
              </div>

              {/* Mail Section (Replace the link with your desired mail link) */}
              <div className="header-call-section flex">
                <div className="call-now-header-icon mx-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="global-blue-bg p-2"
                  />
                </div>
                <div className="call-now-header-info">
                  <Link to="mailto:service@rajseba.com">
                    <h6>মেইল করুনঃ</h6>
                    <p>service@rajseba.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Header for Mobile devices */}
        <header className="bg-transparent text-white py-4 px-6 lg:hidden">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo (Replace with your logo image or text) */}
            <div>
              <a href="/">
                <img src={logo} alt="Logo" className="w-30" />
              </a>
            </div>
            <div className="header-call-section flex ml-2">
                <div className="call-now-header-icon mx-2 mt-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className=" text-2xl global-blue-bg p-1"
                  />
                </div>
                <div className="call-now-header-info text-black mt-8">
                  <Link to="tel:+8801813333373">
                    <p>০১৮১৩৩৩৩৩৭৩</p>
                  </Link>
                </div>
              </div>
            </div>
        </header>
      </>
    </div>
  );
};

export default MainHeader;
