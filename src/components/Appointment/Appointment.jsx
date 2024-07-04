import "./appointment.css"
import Container from './../../Shared-componets/Container/Container';
import { FiArrowUpRight } from "react-icons/fi";
import logo2 from "../../assets/humen-image/logoLight.png"

const Appointment = () => {
    return (
      <Container>
        <section className="appointment flex justify-between p-11 my-[150px]">
          <div className="p-24">
            <h1>
              Get Your <br /> First Appointment <br /> at 50% Off!
            </h1>

            <div className="flex items-center gap-6 mt-9">
              <button className="flex items-center gap-3 rounded-xl bg-[#FFC637] p-3">
                Appointment <FiArrowUpRight />
              </button>
              <button className="flex gap-3 text-white rounded-xl border items-center  p-3">
                Learn More <FiArrowUpRight />{" "}
              </button>
            </div>
          </div>
          <img className="w-[100px] h-[50px]" src={logo2} alt="" />
        </section>
      </Container>
    );
};

export default Appointment;