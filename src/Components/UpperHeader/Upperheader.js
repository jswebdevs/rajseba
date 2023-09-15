import React from "react";
import "./upperheader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UpperHeader = () => {
  return (
    <div className="bg-gray-800 py-3 text-blue-personal upperHeader-wrapper">
      {/* PC Version */}
      <div className="hidden lg:flex lg:justify-between lg:items-center upperHeader">
        {/* First Section (left-half) - Location */}
        <div>
          <Link to="/location" target="_blank">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
            <span>অফিসের ঠিকানা</span>
          </Link>
        </div>

        {/* Second Section (right-half) */}
        <div className="flex">
          <div className="book-online">
            <Link to="/booking">অনলাইনে বুক করুন</Link>
          </div>
          <div className="call-now">
            <Link to="tel:+8801813333373">
              <FontAwesomeIcon icon={faFire} className="mr-1  text-white" />
              হটলাইনঃ ০১৮১৩৩৩৩৩৭৩
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      {/* <div className="lg:hidden text-center">
        <div className="my-2">
          <Link to="/location" target="_blank">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2  text-white" />
            <span>অফিসের ঠিকানা</span>
          </Link>
        </div>
        <div className="my-2">
          <div className="book-online">
            <Link to="/booking">অনলাইনে বুক করুন</Link>
          </div>
        </div>
        <div className="my-2">
          <Link to="tel:+8801813333373">
            <FontAwesomeIcon icon={faFire} className="mr-1  text-white" />
            হটলাইনঃ ০১৮১৩৩৩৩৩৭৩
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default UpperHeader;
