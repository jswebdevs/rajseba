import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const FooterInfo = () => {
  return (
    <div className="mx-auto text-white pt-4">
      {/* Footer Row-1 */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* First Column (PC devices) */}
        <div className="md:w-1/3 p-3 justify-stretch">
          <h3 className="text-xl font-bold mb-2">রাজসেবার সম্পর্কিতঃ</h3>
          <div className="w-20 border-b border-gray-400 hover:w-full transition-all duration-300"></div>
          <p className="mt-2">
            রাজসেবা রাজশাহী শহরের সর্বপ্রথম ও সর্ববৃহৎ সেবাদানকারী অনলাইন
            প্লাটফর্ম। আমাদের কাছে আপনি ঘরে বসেই পাবেন আপনার বাসা-অফিস ও
            দৈনন্দিন জিনিসপত্র সংযোগ, পরিষ্কার ও মেরামতের মত সকল সেবা। আমাদের
            সম্পর্কে আরো জানতে নীচে ক্লিক করুন।
          </p>
          <button className="mt-4 global-blue-bg text-white px-4 py-2 rounded hover:bg-blue-600">
            <Link to="/about">বিস্তারিত জানুন</Link>
          </button>
        </div>

        {/* Second Column (PC devices) */}
        <div className="md:w-1/3 p-3 justify-stretch">
          <h3 className="text-xl font-bold mb-2">সেবা গ্রহণের সময়ঃ</h3>
          <div className="w-16 border-b border-gray-400 hover:w-full transition-all duration-300"></div>
          <p className="mt-2">
            রাজসেবার সেবা আপনি নিতে পারবেন প্রতিদিন সকাল ৮ঃ০০ টা থেকে রাত ১০ঃ০০
            টা পর্যন্ত।
          </p>
          <p className="mt-3">
            নির্দিষ্ট সময়ের বাইরে শর্তসাপেক্ষে আমরা ইমার্জেন্সি সেবা প্রদান করে
            থাকি। সেক্ষেত্রে হটলাইনে কল করে অর্ডার করতে হবে।
          </p>
        </div>

        {/* Third Column (PC devices) */}
        <div className="md:w-1/3 p-3 justify-stretch">
          <h3 className="text-xl font-bold mb-2">যোগাযোগের ঠিকানাঃ</h3>
          <div className="w-16 border-b border-gray-400 hover:w-full transition-all duration-300"></div>
          <ul className="mt-2">
            <li className="my-2">
              <Link to="https://www.rajseba.com/location" target="_blank">
                <span className="text-bold">অফিসের ঠিকানাঃ </span>
                <p>১০ম তলা, জয় সিলিকন টাওয়ার </p> 
                <p>বঙ্গবন্ধু শেখ মুজিব হাইটেক পার্ক রাজশাহী, রাজশাহী</p>
              </Link>
            </li>
            <li className="my-2">
              <Link to="tel:+880181333373">
                ফোন নাম্বারঃ ০১৮১৩৩৩৩৩৭৩, ০১৭১১৭১৫৫৭৫
              </Link>
            </li>
            <li className="my-2">
              <Link to="mailto: info@rajseba.com">
                ই-মেইলঃ info@rajseba.com
              </Link>
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex mt-4">
            <ul className="flex">
              <li className="mr-3">
                <Link to="https://www.facebook.com/rajsebacom" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="w-8 h-10 facebook-icon px-2 py-1 global-blue-bg rounded-md"
                  ></FontAwesomeIcon>
                </Link>
              </li>

              <li className="mr-3">
                <Link to="https://www.instagram.com/rajsebadotcom" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-8 h-10 instagram-icon px-2 py-1 global-blue-bg rounded-md"
                  ></FontAwesomeIcon>
                </Link>
              </li>
              <li className="mr-3">
                <Link to="https://www.tiktok.com/rajsebadotcom" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="w-8 h-10 tiktok-icon px-2 py-1 global-blue-bg rounded-md"
                  ></FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to="https://youtube.com/@rajsebadotcom?si=0o_r2rV5VqY8CmcI" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-8 h-10 youtube-icon px-2 py-1 global-blue-bg rounded-md"
                  ></FontAwesomeIcon>
                </Link>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterInfo;
