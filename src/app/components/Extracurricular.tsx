// ExtracurricularSection.js

import React from "react";
import RoboticsProjects from "./RoboticsProjects";
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
        <p className="text-3xl text-center font-bold">
          Some of my projects are
        </p>
      </div>
      <RoboticsProjects />
    </div>
  );
};

export default ExtracurricularSection;
