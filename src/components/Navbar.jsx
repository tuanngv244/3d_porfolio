import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-fit-content  py-[2px] px-[5px] relative">
        <span className=" relative blue-gradient_text text-lg font-bold z-[2]">
          VanTuan
        </span>
        <span className="absolute z-[1] rounded-md scale-110 rotate-[-3deg] w-full h-full bg-white shadow-sm top-0 left-0"></span>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#662ac0]" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-[#662ac0]" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
