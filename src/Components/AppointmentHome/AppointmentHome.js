import React from "react";
import appointmentImage from "./appointment-home.webp";
import "./appointment-home.css"; // Import the CSS file for the component
import Mainform from "../Forms/Mainform";

const AppointmentHome = () => {
  return (
    <div className="appointment-home-container-wrapper mt-8 mb-4">
      <div className="appointment-home-container flex flex-col md:flex-row">
        <div className="appointment-form md:w-1/2 w-full">
          
          <Mainform></Mainform>
        </div>
        <div className="appointment-image md:w-1/2 mt-4 md:mt-0 w-full">
          <img src={appointmentImage} alt="Appointment" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentHome;
