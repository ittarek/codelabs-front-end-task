import React from 'react';
import "./service.css"
import Container from './../../Shared-componets/Container/Container';
import { FiArrowUpRight } from "react-icons/fi";
import hardImage from "../../assets/humen-image/image3.png"
import liveService from "../../assets/humen-image/image4.png"
import oldGirl from "../../assets/humen-image/image2.png";
const Service = () => {
    return (
      <Container>
        <section className="service  mx-auto   my-[150px] grid grid-cols-1 lg:grid-cols-2   gap-11">
          {/* div 1 */}
          <div className="text_side space-y-3 p-6">
            <button className="border border-[#343268] rounded-full">
              Service
            </button>
            <h1 className="w-[450px]">Empowering Health, Enriching Lives</h1>
            <p className="w-[380px]">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <button className="flex items-center gap-3 rounded-xl bg-[#FFC637]">
              Appointment <FiArrowUpRight />
            </button>
          </div>
          {/* div 2 */}
          <div>
            <img src={hardImage} alt="" />
            <div className="rounded-[32px] lg:absolute xl:mt-[-160px] xl:left-[710px] lg:mt-[-160px] lg:left-[550px]">
              <h1 className="mb-6">Advanced Technology</h1>
              <p>
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
            </div>
          </div>
          {/* div 3 */}
          <div>
            <img src={liveService} alt="" />
            <div className="rounded-[32px] lg:absolute xl:mt-[-160px] xl:left-[100px] lg:mt-[-160px] lg:left-[65px]">
              <h1 className="mb-6">Online Doctor Meet</h1>
              <p>
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
            </div>
          </div>
          {/* div 4 */}
          <div>
            <img src={oldGirl} alt="" />
            <div className="rounded-[32px] lg:absolute xl:mt-[-160px] xl:left-[720px] left-[720px] lg:mt-[-160px] lg:left-[550px]">
              <h1 className="mb-6">Consultancy your health</h1>
              <p>
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
            </div>
          </div>
        </section>
      </Container>
    );
};

export default Service;