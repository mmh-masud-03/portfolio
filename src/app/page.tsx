// Import Next.js components and Tailwind CSS styles
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

// Define the portfolio data as an array of objects
const portfolioData = [
  {
    title: "Todo App",
    description: "A simple todo app built with React and Next.js",
    image: "/todo-app.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/todo-next",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Blog Site",
    description: "A personal blog site built with Next.js and Markdown",
    image: "/blog-site.png",
    url: "#",
    github: "https://github.com/your-username/blog-site-nextjs",
    tech: ["Next.js", "Markdown", "Tailwind CSS"],
  },
  {
    title: "E-commerce Site",
    description: "A mock e-commerce site built with Next.js and Stripe",
    image: "/e-commerce-site.png",
    url: "#",
    github: "https://github.com/your-username/e-commerce-site-nextjs",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
  },
];

// Define the Home component that renders the portfolio
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="My portfolio website built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I'm Masud
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
          I'm a react and next js developer
        </p>
        <div className="flex mt-8">
          <a
            href="https://github.com/mmh-masud-03"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <Image
              src="/images/github-logo.png"
              alt="GitHub"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/md-masud-hossen-9733611a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/LinkedIn_icon.svg.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {portfolioData.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
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
                    className="text-gray-600 dark:text-gray-300 hover:underline flex items-center"
                  >
                    <Image
                      src="/images/github-logo.png"
                      alt="GitHub"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    Source Code
                  </a>
                </div>
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
      </main>
    </div>
  );
}
