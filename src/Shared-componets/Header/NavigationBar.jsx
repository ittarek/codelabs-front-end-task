import  { useState } from "react";
import "./NavigationBar.css";
import { FiArrowUpRight } from "react-icons/fi";
// import { slide as Menu } from "react-burger-menu";
// import { bubble as Menu } from "react-burger-menu";
// import { scaleRotate as Menu } from "react-burger-menu";
import { fallDown as Menu } from "react-burger-menu";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../../assets/humen-image/logodark.png";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleStateChange = state => {
      setOpen(state.isOpen);
    };
  return (
    <Container>
    
        <div className=" flex h-16 items-center justify-between lg:mx-9 mx-auto">
          <label className="  lg:hidden">
            <Hamburger
              size={20}
              toggled={isOpen}
              toggle={() => setOpen(!isOpen)}
            />
          </label>
          {/* website logo */}
          <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src={logo} alt="Your Company" />
          </div>
          <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
            {/* desktop menu */}
            <div className=" hidden  sm:block">
              <div className="flex space-x-4 ">
                <Link
                  to=""
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to=""
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  to=""
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  to=""
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>

          {/* button */}
          <div className=" inset-y-0 right-0 space-x-1 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button>Appointment </button>
            <FiArrowUpRight />
          </div>
        </div>
        {/* dropdown menu */}

        <Menu
          customBurgerIcon={false}
          isOpen={isOpen}
          onStateChange={handleStateChange}
          className=" bg-slate-400 menu menu-sm  
          "
        >
          <ul className="text-white">
            <li>
              <Link className="text-xl  my-3" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl  my-3" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-xl  my-3" to="/myProtFolio">
                My ProtFolio
              </Link>
            </li>
          </ul>
        </Menu>

    </Container>
  );
};

export default NavigationBar;
