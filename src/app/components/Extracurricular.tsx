// ExtracurricularSection.js

import React from "react";

const ExtracurricularSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Extracurricular Activities
      </h2>

      {/* Robotics Club Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">BUP Robotics Club</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Position:</span> Technical Vice
          President
        </p>
        <p className="text-gray-700 mb-4">
          Participated in various inter-university robotics contests and events.
        </p>
      </div>

      {/* Projects Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Projects I have done</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              RFID Attendance System
            </h4>
            <p className="text-gray-700">
              Implemented an RFID-based attendance system for efficient tracking
              of student attendance.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Voice Controlled Home Automation
            </h4>
            <p className="text-gray-700">
              Developed a home automation system controlled via voice commands
              using Arduino and speech recognition via bluetooth.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Welcome Bot</h4>
            <p className="text-gray-700">
              Designed and programmed a welcoming robot to greet visitors at
              campus events.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Smoke-Free Campus</h4>
            <p className="text-gray-700">
              Initiated and led a project to promote a smoke-free environment on
              campus and raise awareness about the harmful effects of active and
              passive smoking.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Touchless Sprayer</h4>
            <p className="text-gray-700">
              Designed and built a touchless hand sanitizer dispenser to promote
              hygiene practices.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Arduino Wireless Distance Meter
            </h4>
            <p className="text-gray-700">
              Developed a wireless distance measurement device using Arduino for
              industrial applications.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Line Follower Robot </h4>
            <p className="text-gray-700">
              Developed a IR sensor based line follower robot which can follow a
              black line on a white surface or vice versa.
            </p>
          </li>
          <li className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Soccer Robot </h4>
            <p className="text-gray-700">
              I participted in many soccer robot competitions. I upgraded the
              robot and made it more efficient by doing R&D on it.
            </p>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ExtracurricularSection;
