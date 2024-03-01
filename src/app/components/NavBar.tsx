import React from "react";
import NavItem from "./NavItem";
import {
  FaHome,
  FaProjectDiagram,
  FaUserTie,
  FaBookOpen,
  FaFileAlt,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className=" w-full bg-gray-800 p-4 md:flex">
      <div className="flex items-center space-x-5">
        <NavItem icon={<FaHome />} label="Home" href="/" />
        <NavItem
          icon={<FaProjectDiagram />}
          label="Projects"
          href="/projects"
        />
        <NavItem icon={<FaUserTie />} label="Experiences" href="/experiences" />
        <NavItem
          icon={<FaBookOpen />}
          label="Extracurricular Activities"
          href="/extra"
        />
        <NavItem icon={<FaFileAlt />} label="Resume" href="/resume" />
      </div>
    </nav>
  );
};

export default NavBar;
