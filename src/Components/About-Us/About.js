import React from "react";
import "./about.css";
import aboutUsImage from "./about-us-mahim.webp";
import startupcertificate from './certificate-startup.webp'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us-container-wrapper mt-4 md:mt-8">
      <div className="about-us-container">
        <div className="about-us-intro flex flex-col md:flex-row mb-5">
          <div className="about-us-info md:w-1/2 w-full md:pr-6">
            <h2 className="text-black text-2xl md:text-4xl text-bold">সংক্ষিপ্ত পরিচিতি</h2>
            <h4 className="text-secondary-color text-xl md:text-2xl">লক্ষ্য ও উদ্দেশ্য</h4>
            <p className="text-md">
              রাজশাহীবাসীর বাসা-অফিস থেকে শুরু করে দৈনন্দিন জীবনের বিভিন্ন ধরনের
              সমস্যার সমাধান কর্মব্যস্ত মানুষেরা যাতে বাসায় বসেই পেতে পারেন, সেই
              লক্ষ্য মাথায় নিয়ে রাজসেবার যাত্রা শুরু।
            </p>
            <p className="text-md">
              রাজসেবা একটি অনলাইন সেবাদানকারী প্লাটফর্ম। রাজসেবার মূখ্য উদ্দেশ্য
              হচ্ছে রাজশাহী বাসির কর্মব্যস্ত জীবনে যাতে কোন কারণে ঝামেলায় পড়তে
              না হয়। বাসা-বাড়ি-অফিস বদল, পরিষ্কার, রং করা, মেরামত করা, নতুন রুপে
              সাজানো থেকে শুরু করে দৈনন্দিন জীবনে ব্যবহৃত যন্ত্রপাতি যেমন এসি,
              টিভি, ফ্রিজ, সিলিং ফ্যান, ওভেন, গিজার, ওয়াশিং মেশিন, ওয়াটার হিটার
              সংযোগ, মেরামত ও স্থান পরিবর্তন, বাসা-বাড়িতে বিদ্যুৎ সংযোগ, তার
              সংযোগ সহ সব ধরনের সেবাই পাবেন রাজসেবাতে।
            </p>

            <div className="about-us-listing flex p-2 text-xl">
              <div className="first-column mr-2">
                <ul>
                    <li><p>দ্রুত সেবা প্রদান</p></li>
                    <li><p>নির্দিষ্ট সময়ে কাজ শেষ</p></li>
                    <li><p>দক্ষ ও অভিজ্ঞ কর্মী</p></li>
                    <li><p>আধুনিক যন্ত্রপাতি</p></li>
                </ul>
              </div>
              <div className="second-column">
                <ul>
                    <li><p>সৎ</p></li>
                    <li><p>নিষ্ঠাবান</p></li>
                    <li><p>গুণগত সেবা</p></li>
                    <li><p>১০০% সন্তুষ্টির নিশ্চয়তা</p></li>
                </ul>
              </div>
            </div>
            <div className="about-us-service-now-button mt-4">
                <button className="about-us-service-now-button px-5 py-2 global-blue-bg text-bold text-xl text-white rounded-md">
                    <Link to="/services">এখনই সার্ভিস নিন</Link>
                    
                </button>
            </div>
          </div>
          <div className="about-us-image w-50 rounded-md">
            <img src={aboutUsImage} alt="" className="w:4/5 rounded-md"/>
          </div>
        </div>

        <div className="our-story text-center">
            <h2 className="text-2xl md:text-4xl">আমাদের গল্প</h2>
            <h3>লক্ষ্য, স্বীকৃতি ও পরিকল্পনা</h3>
            <p>রাজসেবার লক্ষ্য, উদ্দেশ্য ও পরিকল্পনা অনেক বৃহৎ। যার কিছু স্বীকৃতিও আমরা ইতোমধ্যে পেয়েছি। </p>
            <p>স্টার্ট-আপ রাজশাহী প্রদত্ত পোর্টফোলিও স্টার্ট-আপ সনদপ্রাপ্তি</p>
            <img src={startupcertificate} alt="" className="w-full py-3"/>
        </div>

        {/* <div className="about-us-partner-carousel">
            <h2 className="text-2xl md:text-4xl">আমাদের সহযোগী</h2>
        </div> */}

      </div>
    </div>
  );
};

export default About;
