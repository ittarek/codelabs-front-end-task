import React from "react";
import "./help.css";
import Container from "./../../Shared-componets/Container/Container";
import { FiArrowUpRight } from "react-icons/fi";
import helpImage from "../../assets/humen-image/image5.png";
const Help = () => {
  return (
    <Container>
      <section className="">
        <div className="lg:flex justify-between items-center gap-11">
          <div className="text_side space-y-6 w-1/2">
            <button className="border  border-[#343268] rounded-full">
              {" "}
              Who we are
            </button>
            <h1 className="w-[350px]">We Help To Get Soultions</h1>
            <p className="w-[px]">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <button className="flex items-center gap-3 rounded-xl bg-[#FFC637]">
              {" "}
              Learn more <FiArrowUpRight />
            </button>
          </div>
          <div>
            <img src={helpImage} alt="" />
          </div>
        </div>

        <div className="extra_section rounded-[32px] xl:w-[395px] lg:w[150px] lg:h-[200px] xl:h-[210px] lg:absolute xl:top-[1450px] xl:left-[680px] lg:top-[1450px] lg:left-[456px] bg-[#343268] p-[30px] text-white ">
          <h1 className="mb-6">Our mission is simple</h1>
          <p className="w-[347px]">
            To provide high-quality healthcare services <br /> that are
            accessible, personalized, and <br /> patient-centered.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Help;
