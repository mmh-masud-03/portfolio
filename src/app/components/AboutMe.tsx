import React from "react";

const AboutMe = () => {
  return (
    <div className=" bg-gradient-to-bl from-purple-50 to-purple-200 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border shadow-md rounded-md">
      <div className="">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/Masud Pic.jpeg"
              alt="Profile Picture"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Greetings! I&apos;m Masud, a versatile full-stack developer with a
              strong focus on Next.js, React, and modern web technologies. With
              experiences in building robust and scalable applications, I have
              honed my skills in crafting seamless user experiences and
              efficient server-side rendering solutions.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise lies in leveraging the power of Next.js to develop
              high-performance, server-rendered React applications. I excel in
              creating dynamic user interfaces, implementing efficient data
              fetching techniques, and optimizing applications for better
              performance and SEO.
            </p>
            <p className="text-gray-700 mb-4">
              In addition to my front-end proficiency, I also have experience in
              back-end development, utilizing technologies like Node.js,
              Express, and various databases. This enables me to deliver
              complete full-stack solutions tailored to meet the unique
              requirements of each project.
            </p>
            <p className="text-gray-700 mb-4">
              I&apos;m passionate about staying up-to-date with the latest
              industry trends and continuously expanding my knowledge.
            </p>
            <a
              href="/Masud_Hossen_Resume.pdf"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
