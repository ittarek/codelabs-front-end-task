import React from "react";
import "./comprehensive.css";
import Container from "./../../Shared-componets/Container/Container";
const Comprehensive = () => {
  return (
    <Container>
      <section className="my-[100px]">
        <div
          className=" absolute top-[625px] left-[420px] w-[532px] h-[112px] inline-block text-center text-[48px] "
          style={{ fontWeight: "600", lineHeight: "56.11px" }}
        >
          Comprehensive Care <br /> for Every Patient
        </div>
        <section className=" text-3xl flex gap-3 mx-auto  justify-between relative">
          <div
            className=" w-[216px] h-[312px] bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            1
          </div>
          <div
            className="w-[216px] h-[190px] relative mt-[125px] bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            2
          </div>
          <div
            className="w-[216px] h-[162px] border border-gray-100 relative mt-[150px]"
            style={{ borderRadius: "24px" }}
          >
            3
          </div>

          <div
            className="w-[216px] h-[190px] relative mt-[125px] bg-[#FBFBFB] "
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            5
          </div>
          <div
            className="w-[216px] h-[312px] bg-[#FBFBFB]"
            style={{ borderRadius: "24px", border: "0.5px" }}
          >
            6
          </div>
        </section>
      </section>
    </Container>
  );
};

export default Comprehensive;
