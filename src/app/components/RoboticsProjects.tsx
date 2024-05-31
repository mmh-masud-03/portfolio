import React from "react";
import Image from "next/image";
const projectData = [
  {
    title: "RFID Attendance System",
    description:
      " Implemented an RFID-based attendance system for efficient tracking of student attendance",
    image: "/images/robotics/RFID.jpg",
    tech: ["RFID", "16X2 LCD", "ESP-8266", "Google Sheets"],
  },
  {
    title: "Voice Controlled Home Automation",
    description:
      " Developed a home automation system controlled via voice commands using Arduino and speech recognition via bluetooth.",
    image: "/images/robotics/Home automation.jpg",
    tech: ["4 Channel Relay", "Bluetooth HC-05", "Arduino"],
  },
  {
    title: "Welcome Bot",
    description:
      "Designed and programmed a welcoming robot to greet visitors at campus events.",
    image: "/images/robotics/Hello bot 2.jpg",
    tech: ["Servo", "Sonar Sensor", "Arduino Uno"],
  },
  {
    title: "Smoke-Free Campus",
    description:
      "Initiated and led a project to promote a smoke-free environment on campus and raise awareness about the harmful effects of active and passive smoking.",
    image: "/images/robotics/Hello bot.jpg",

    tech: ["Gas Sensor", "Servo", "Arduino Uno"],
  },
  {
    title: "Touchless Sprayer",
    description:
      "   Designed and built a touchless hand sanitizer dispenser to promote hygiene practices.",
    image: "/images/",
    tech: ["IR Sensor", "Servo"],
  },

  {
    title: "Arduino Wireless Distance Meter",
    description:
      " Developed a wireless distance measurement device using Arduino for industrial applications.",
    image: "/images/robotics/Wireless Distance meter.png",

    tech: ["Sonar Sensor", "16X2 LCD", "Arduino Uno"],
  },
  {
    title: "Line Follower Robot",
    description:
      "Developed a IR sensor based line follower robot which can follow a black line on a white surface or vice versa.",
    image: "/images/robotics/LFR.jpg",

    tech: ["IR Sensor", "LiPo Battery", "Arduino Nano"],
  },
  {
    title: "Soccer Robot",
    description:
      "I participted in many soccer robot competitions. I upgraded the robot and made it more efficient by doing R&D on it.",
    image: "/images/robotics/Soccer Robot.jpg",

    tech: [
      "Bluetooth HC-05",
      "LiPo Battery",
      "Arduino Uno",
      "High torque motors",
    ],
  },
];

function RoboticsProjects() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative h-48 hover:scale-150 p-2">
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoboticsProjects;
