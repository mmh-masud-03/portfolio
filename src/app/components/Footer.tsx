// Footer.js

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-white">
            &copy; 2024 Designed and Developed by Masud Hossen
          </p>
          <div className="flex space-x-4">
            <SocialIcon
              href="https://github.com/mmh-masud-03"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/md-masud-hossen-9733611a1/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({
  href,
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400"
    >
      {icon} <span className="sr-only">{label}</span>
    </a>
  );
};

export default Footer;
