import { NavLink } from "react-router-dom";
import { useState } from "react";
import Smile from "../assets/images/smile.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="header fixed top-0 left-0 z-[1000] w-full">
      <div className="container">
        <NavLink to="/" className="w-fit-content  py-[2px] px-[5px] relative">
          <span className=" relative blue-gradient_text text-lg font-bold z-[2]">
            V.Tuan
          </span>
          <span className="absolute z-[1] rounded-md scale-110 rotate-[-3deg] w-full h-full bg-white shadow-sm top-0 left-0"></span>
        </NavLink>
        <nav className="nav">
          <div className={`navList ${openNav ? "active" : ""}`}>
            <img className="w-[20px] h-[20px]" src={Smile} />
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "!text-black" : "text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "!text-black" : "text-white"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "!text-black" : "text-white"
              }
            >
              Contact
            </NavLink>
          </div>
          <div
            onClick={() => setOpenNav((prev) => !prev)}
            className="hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
