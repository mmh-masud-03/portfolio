"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import CoderIcon from "./components/CoderIcon";
import Github from "./components/Github";
import ToolsAndTechnologies from "./components/ToolsAndTechnologies";
import AboutMe from "./components/AboutMe";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container animate-fade-in-up mx-auto px-4 mt-11 md:mt-6">
      <div className="flex flex-col  md:ml-4 md:flex-row justify-between items-center">
        <div className=" animate-fade-in-up w-full md:w-1/2 mb-8 md:pb-8 md:mr-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 py-5">
            Hi There, I am Masud
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 pb-9">
            Welcome to My Portfolio
          </h1>
          <p className="text-xs md:text-sm lg:text-xl line-clamp-1 py-2">
            <TypeAnimation
              sequence={[
                "I'm a Next.js Developer",
                1000,
                "I'm a MERN stack Developer",
                1000,
                "I'm an IoT Projects Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "1.8em",
                fontWeight: "bold",
                color: "#4B5563",
                textWrap: "wrap",
              }}
            />
          </p>
        </div>

        <div className=" w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <CoderIcon />
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center ">
        <div className="flex flex-col items-center md:flex-row gap-5">
          <div className="w-9/12">
            {" "}
            <AboutMe />
          </div>
          <div className="flex w-full flex-col md:w-3/12 h-full">
            <div className="flex flex-col bg-gradient-to-br from-purple-50 to-purple-200 shadow-md rounded-md">
              <p className="text-xl md:text-3xl text-wrap font-bold text-gray-800 mb-10 mt-8 text-center">
                Tools And Technologies I Use
              </p>
              <ToolsAndTechnologies />
            </div>
            <div className=" w-full bg-gradient-to-bl from-purple-50 to-purple-200 text-center mt-3 shadow-md h-full rounded-md">
              {" "}
              <p className="text-lg md:text-xl font-bold text-gray-600 dark:text-gray-300 mt-10 ">
                Find Me on
              </p>
              <div className="flex mt-3 mb-20 justify-center">
                <a
                  href="https://github.com/mmh-masud-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 hover:scale-105"
                >
                  <Image
                    src="/images/github-logo.png"
                    alt="GitHub"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-masud-hossen-9733611a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105"
                >
                  <Image
                    src="/images/LinkedIn_icon.svg.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <div className="flex flex-col items-start w-3/4 h-full mx-auto">
            <p className="text-3xl font-bold my-4 text-left">Achievements:</p>
            <span className="py-2">
              Placed second runners up in Inter University Arduino Programming
              Contest arranged by BUP Robotics Club
            </span>
            <Image
              src={"/images/robotics/Runners up.jpg"}
              alt="Runners up"
              width={900}
              height={500}
            />
          </div>
          <div className="md:w-1/4 h-full px-6 py-10 my-auto  font-semibold bg-slate-200">
            <p className="text-2xl">
              I am compatiable with both hardware and software projects.
              Checkout my previous works
            </p>
            <p className="flex flex-col gap-2 mt-3">
              <Link
                href={"/projects"}
                className="bg-purple-300 px-4 py-2 rounded-lg"
              >
                Software Projects
              </Link>

              <Link
                href={"/extra"}
                className="bg-purple-300 px-4 py-2 rounded-lg mt-3"
              >
                Embedded Projects
              </Link>
            </p>
          </div>
        </div>
        <Github />
      </div>
    </main>
  );
}
