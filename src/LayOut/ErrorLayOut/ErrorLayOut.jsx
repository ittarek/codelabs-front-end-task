import React, { useRef } from "react";

import "./ErrorLayOut.css";
const ErrorLayOut = () => {
  const error = useRef();
  return (
    <div>
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <div className="d-flex justify-content-center m-auto align-items-center flex-column">
        <img
          className="w-50"
          src="https://i.ibb.co/hWr5FhQ/stock-photo-error-web-page-not-found-futuristic-robotic-toy-mechanism-light-bulb-and-pliers-in-hands.jpg"
          alt=""
        />

        <div className="w-25 text-center ">
          <h2 className="mb-8  ">
            <span className="">Page Not Found</span> {status || 404}
          </h2>
          <p className=" mb-8">{error?.message}</p>
          <Link to="/" className="px-8 py-3 ">
            Back to homepage
          </Link>
        </div>
      </div>
      </div>
  
  );
};

export default ErrorLayOut;
