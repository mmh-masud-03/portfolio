import React from "react";
import Image from "next/image";
const portfolioData = [
  {
    title: "Ecommerce Platform",
    description:
      "A full-stack e-commerce application where you can create and login to your account then select one or more products to add to the cart or wishlist and place order. You can serach and filter products. Check live demo for more.",
    image: "/images/ecommerce.png",
    url: "https://gadget-hub-store.vercel.app/",
    github: "https://github.com/mmh-masud-03/ecommerce",
    tech: ["NextJS", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Chat Application",
    description:
      "A realtime chat application where you can create and login to your account then select one or more contacts to start a chat. You will always see the last message first and send any image or text. Check live demo for more.",
    image: "/images/convosphere.png",
    url: "https://next-chat-convosphere.vercel.app/",
    github: "https://github.com/mmh-masud-03/next-chat",
    tech: ["PusherJS", "Next-Auth", "Cloudinary"],
  },
  {
    title: "JSON Timeline",
    description:
      "This is the timeline of posts from jsonplaceholder API. You can see the posts, comments, and users. The posts are sorted in descending order and the comments are sorted by post id.",
    image: "/images/json-timeline.png",
    url: "https://json-timeline.vercel.app/",
    github: "https://github.com/mmh-masud-03/json-timeline",
    tech: ["Next.js", "Tailwind", "JSONPlaceholder"],
  },
  {
    title: "Todo App",
    description:
      "A simple todo app built with React, Express and MongoDB following MVC pattern where you can add, delete, and mark as complete or incomplete your tasks then filter them by all, active, and completed.",
    image: "/images/todo-full.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/todo-next",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Blog Site",
    description:
      "A personal blog site built with React.js. You can navigate between the routes easily. The components are reusable. The blog posts are written in jsx and rendered dynamically.",
    image: "/images/blog-react.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/Blog_React",
    tech: ["React.js", "Markdown", "CSS"],
  },

  {
    title: "Resort Site",
    description:
      "I made the clone of a resort site using HTML, CSS, and JavaScript.",
    image: "/images/sarah-body.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/Sarah-Resort",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
  },
];

function ProjectsCard() {
  return (
    <div className="mx-3 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
        {portfolioData.map((project) => (
          <div
            key={project.title}
            className="bg-white  shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative h-48 hover:scale-150 p-2">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                {project.title}
              </h3>
              <p className="text-gray-600  mt-2">{project.description}</p>
              <div className="flex items-center mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mr-4"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600  hover:underline flex items-center"
                >
                  <Image
                    src="/images/github-logo.png"
                    alt="GitHub"
                    width={16}
                    height={16}
                    className="mr-1 "
                  />
                  Source Code
                </a>
              </div>
              <div className="flex flex-wrap mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-600 bg-gray-200  py-1 px-2 rounded mr-2 mb-2"
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

export default ProjectsCard;
