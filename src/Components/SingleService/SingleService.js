// SingleService.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singleservice.css";
import LeftSidebar from "./LeftSidebar";
import ServiceAccordion from "./ServiceAccordion";
import SingleServiceForm from "../Forms/SingleServiceForm"

const SingleService = () => {
  const {servicesslug} = useParams();
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    // Fetch the service data asynchronously
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the selected service using the servicesslug parameter
        const selectedService = data.find(
          (service) => service.serviceslug === servicesslug
        );
        setServiceData(selectedService);

      })

  }, [servicesslug]);

  const {
    serviceid,
    servicename,
    serviceheadline,
    serviceimage,
    servicedescriptiontitle,
    serviceawareness,
    servicebanner,
    servicedescription,
    serviceformtitle,

  } = serviceData;


  if (!serviceimage) {
    return <div>Image not found</div>;
  }

  return (
    <div className="single-service-wrapper my-4 md:my-8">
      <div className="single-service-container">
        <div className="sidebar md:flex">
          <div className="left-sidebar mr-4">
            <LeftSidebar></LeftSidebar>
          </div>

          <div className="right-sidebar">
            <div className="single-service-heading">
              <h3>{servicename}</h3>
              <img src={serviceimage} alt={servicename} />
              <p>{serviceheadline}</p>
              <h2 className="text-bold text-2xl">{servicedescriptiontitle}</h2>
            </div>
            <div className="single-service-accordion">
              {servicedescription.map((accordion) => (
                <ServiceAccordion
                  key={accordion.id}
                  accordion={accordion}
                ></ServiceAccordion>
              ))}
            </div>
            <div className="service-awareness-container p-2 global-blue-bg rounded-md mt-3">
              <div className="service-awareness p-2">
              <h2 className="text-2xl">{serviceawareness}</h2>
              </div>
            </div>
            <div className="service-banner-container secondary-bg p-2 rounded-md my-3">
              <div className="service-banner p-2">
              <h2 className="text-2xl text-white">{servicebanner}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="service-full-width flex">
          <div className="form-section md:w-1/2">
          <h3>{serviceformtitle}</h3>
          <div className="form-single-service">
            <SingleServiceForm key={serviceid} options={servicedescription}></SingleServiceForm>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
