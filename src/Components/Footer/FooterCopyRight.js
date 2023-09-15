import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const FooterCopyRight = () => {
  return (
    <div className="copyright-container-wrapper">
      <div className="copyright-container p-6 text-center text-white uppercase" >
        {/* Footer Row-3 */}
        <div className="md:flex justify-between">
          {/* All Rights Reserved */}
          <div>
            <p> &copy; <Link to ="https://www.rajseba.com/" >রাজসেবা</Link></p>
          </div>

          {/* Designed By */}
          <div>
            <p>
              Designed By: <Link to="https://www.facebook.com/jswebdevs/" target="_blank"><span className="text-blue-personal">  JS Web Devs</span></Link>
            </p>
          </div>

          {/* Privacy Policy and Terms */}
          <div>
            <ul className="flex footer-list">
              <li className="mr-7">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
