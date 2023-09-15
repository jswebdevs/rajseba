import {React, useEffect, useState } from 'react';
import './worksystem.css';
import WorkSystemCard from './WorkSystemCard';

const WorkSystem = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/worksystem.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    return (
        <div className='worksystem-container-wrapper py-5'>
            <div className="worksystem-container text-center ">
                <h2 className='text-3xl text-black md:text-5xl'>কার্যপ্রণালী</h2>
                <h4 className='text-xl text-secondary-color '>সেবা গ্রহণের নিয়মাবলী</h4>
                <p className='text-xl text-ashtype py-2'>আমাদের কাছ থেকে সেবা নেয়া খুবই সহজ। নীচে দেখানো ০৪ টি স্টেপ ফলো করে খুব সহজেই সেবা নিয়ে নিন আপনার দোরগোড়ায়।</p>
                <div className='worksystem-cards flex'>
                    {
                        data.map((item) => <WorkSystemCard key={data.id} item={item}></WorkSystemCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkSystem;