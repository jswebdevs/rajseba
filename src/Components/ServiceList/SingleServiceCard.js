import { React } from "react";
import { Link } from "react-router-dom";
import "./servicelist.css";

const SingleServiceCard = ({ singleService }) => {
  const { serviceslug, serviceicon, servicename, serviceimage } = singleService;

  return (
    <div className="singleServiceWrapper text-left mt-4 rounded-md">
      <Link to={`/services/${serviceslug}`}>
        <div
          className="singleServiceCard md:h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${serviceimage})` }}
        >
          <div className="service-icon pl-3">
            <img
              src={serviceicon}
              alt=""
              className="service-icon-image rounded-md"
            />
          </div>
          <h2 className="text-white text-bold text-2xl mt-2 py-2 px-4 rounded-md global-blue-bg">
            {servicename}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default SingleServiceCard;
