import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './singleservice.css'

const LeftSidebar = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
    }, []);



  return (
    <div className='left-sidebar-container'>
      <ul>
        {
          services.map((servicelink) => <li className='left-sidebar-link text-2xl global-blue-bg m-1 p-2 rounded-md'><Link to={`/services/${servicelink.serviceslug}`}>{servicelink.servicename}</Link></li> )
        }
      </ul>      
    </div>
  );
};

export default LeftSidebar;