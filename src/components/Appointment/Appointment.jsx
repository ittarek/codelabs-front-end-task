import "./appointment.css"
import Container from './../../Shared-componets/Container/Container';
import { FiArrowUpRight } from "react-icons/fi";
import logo2 from "../../assets/humen-image/logoLight.png"

const Appointment = () => {
    return (
      <Container>
        <section className="appointment flex justify-between lg:p-11 p-6 my-[50px] mt-[-100px] lg:mt[-0px] lg:my-[150px]">
          <div className="lg:p-24 ">

            <h1 className="lg:text-[40px] lg:text-left text-white lg:w-[530px]">
              Get Your <br /> First Appointment <br /> at 50% Off!
            </h1>
            <div className="flex items-center gap-6 w-[310px] lg:w-100 mx-auto mt-9">
              <button className="flex items-center gap-3 rounded-xl bg-[#FFC637] p-3">
                Appointment <FiArrowUpRight />
              </button>
              <button className="flex gap-3 text-white rounded-xl border items-center justify-between   p-3">
                Learn More <FiArrowUpRight />{" "}
              </button>
            </div>
          </div>
          <img className="w-[50px] h-[25px] lg:w-[100px] lg:h-[50px] -ml-11 lg:ml-11" src={logo2} alt="" />
        </section>
      </Container>
    );
};

export default Appointment;