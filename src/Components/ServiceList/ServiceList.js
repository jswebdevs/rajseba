import {React, useState, useEffect} from 'react';
import './servicelist.css';
import SingleServiceCard from './SingleServiceCard';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

    return (
        <div className='service-list-container-wrapper my-10'>
            <div className="service-list-container text-center">
                <h2 className='text-bold text-black text-4xl md:text-6xl'>আমাদের সেবাসমূহ</h2>
                <h3 className='text-secondary-color'>যেসকল সেবাসমূহ আমরা প্রদান করি</h3>
                <p className='px-4'>কর্মব্যস্ত জীবনে যেসকল ঝামেলা আপনার অনেক সময়ের অপচয় করে থাকে, আপনার একটি কলেই নীচের সকল সেবা পৌছে যাবে আপনার দরজায়।</p>
                <div className="all-service-list md:grid md:grid-cols-3 md:gap-5">
                    { loading ? (
                        <p>Loading reviews...</p>
                      ) : (
                        services.map(singleService => <SingleServiceCard key={singleService.id} singleService={singleService}></SingleServiceCard>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;