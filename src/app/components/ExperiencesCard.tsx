import React from "react";
import Image from "next/image";
const resources = [
  {
    organization: "Expert Consortium LTD",
    logo: "/images/kutir.jpg",
    url: "https://www.linkedin.com/company/k-limited/mycompany/",
    position: "Frontend Developer",
    technologies: ["Next.Js", "TypeScript", "Tailwind CSS"],
    time: {
      starting: "1 January 2024",
      ending: "Present",
    },
  },
  {
    organization: "A.I.T GreeNEX",
    logo: "/images/aitgreenex.jpg",
    url: "https://www.linkedin.com/company/aitgreenex/",
    position: "Full Stack Developer Intern",
    technologies: ["React.Js", "FastAPI"],
    time: {
      starting: "November 2022",
      ending: "January 2023",
    },
  },
];
function ExperiencesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 mt-8 mb-6">
      {resources.map((resource) => (
        <div
          key={resource.organization}
          className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-lg overflow-hidden px-5"
        >
          <div className="relative mx-auto h-48 w-60">
            <a href={resource.url}>
              <Image
                src={resource.logo}
                alt={resource.organization}
                width={150}
                height={150}
                className="object-cover rounded mx-auto hover:scale-95"
              />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {resource.organization}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {resource.position}
            </p>
          </div>
          <div>
            {resource.time.starting}-{resource.time.ending}
          </div>
          <div className="flex flex-wrap mt-4">
            {resource.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperiencesCard;
