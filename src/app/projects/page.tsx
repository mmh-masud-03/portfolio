import ProjectsCard from "../components/ProjectsCard";

function page() {
  return (
    <div className=" animate-fade-in-up mx-5 mt-16">
      <p className="text-4xl font-semibold text-center">Projects I have done</p>
      <ProjectsCard />
    </div>
  );
}

export default page;
