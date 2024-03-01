// components/NavBar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaProjectDiagram,
  FaUserTie,
  FaBookOpen,
  FaFileAlt,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 md:flex-col">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <NavItem icon={<FaHome />} label="Home" href="/" />
          <NavItem
            icon={<FaProjectDiagram />}
            label="Projects"
            href="/projects"
          />
          <NavItem
            icon={<FaUserTie />}
            label="Experiences"
            href="/experiences"
          />
          <NavItem
            icon={<FaBookOpen />}
            label="Extracurricular Activities"
            href="/extra"
          />
        </div>
        <div>
          <NavItem icon={<FaFileAlt />} label="Resume" href="/resume" />
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
}> = ({ icon, label, href }) => {
  const router: string = usePathname(); // Get the current route

  // Check if the current route matches the href
  const isActive = router === href;

  return (
    <Link href={href}>
      <div
        className={
          `flex items-center text-xl mx-5 hover:scale-95 ${
            isActive ? "font-bold text-blue-300" : "text-white"
          }` // Apply bold font if active
        }
      >
        <span className="mr-1">{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavBar;
