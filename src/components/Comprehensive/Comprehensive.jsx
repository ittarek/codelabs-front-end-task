import React from "react";
import "./comprehensive.css";
import Container from "./../../Shared-componets/Container/Container";
import ruff from "../../assets/groupImage/Group12.png"
import contact from "../../assets/groupImage/contract.png"
import  man from "../../assets/groupImage/Group7.png"
import dollar from "../../assets/groupImage/Group.png"
import youtube from "../../assets/groupImage/Group8.png"
import { FaStar } from "react-icons/fa";


const Comprehensive = () => {
  return (
    <Container>
      <section className="my-24 compare  ">
        <div
          className=" lg:absolute lg:h-screen lg:mt-[1px] lg:left-[28%] xl:left-[31%] xl:top-[125%] lg:w-[532px]   text-center lg:text-[48px]  text-2xl mx-auto"
          style={{ fontWeight: "600", lineHeight: "56.11px" }}
        >
          Comprehensive Care <br /> for Every Patient
        </div>
        <section className="compare text-3xl lg:flex gap-3 mx-auto  justify-between relative " >
          <div
            className="p-3 lg:p-0 lg:w-[216px] lg:h-[312px] bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            <div>
              {" "}
              <h1> 90%</h1>
              <p>Patient satisfaction rate, reflecting our commitment.</p>
            </div>
            <img src={ruff} alt="" />
          </div>
          <div
            className="lg:w-[216px] p-3 lg:p-0 lg:h-[190px] relative lg:mt-[125px] mt-11 bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            <div>
              {" "}
              <h1>500+</h1>
              <p>Board-certified doctors</p>
            </div>
            <img className="" src={contact} alt="" />
          </div>
          <div
            className="lg:w-[216px] p-3 lg:p-0 lg:h-[162px] border border-gray-100 relative   mt-11 lg:mt-[150px] "
            style={{ borderRadius: "24px" }}
          >
            <div>
              {" "}
              <h1 className="flex gap-3">
                4.8
                <FaStar className="text-yellow-400"/>
              
              </h1>
              <p>Over 20,000 Patient</p>
            </div>
            <img className="" src={man} alt="" />
          </div>

          <div
            className="lg:w-[216px] lg:h-[190px]  relative lg:mt-[125px] mt-11 p-3 lg:p-0 bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            <div>
              <h1>$5000</h1>
              <p>Money spend for poor patient</p>
            </div>
            <img  src={dollar} alt="" />
          </div>
          <div
            className="lg:w-[216px] p-3 lg:p-0 lg:h-[312px] mt-11 lg:mt-0 bg-[#FBFBFB]"
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            <div>
              {" "}
              <h1> 50+</h1>
              <p>Free lession video for patient</p>
            </div>
            <img src={youtube} alt="" />
          </div>
        </section>
      </section>
    </Container>
  );
};

export default Comprehensive;
