import ExperiencesCard from "../components/ExperiencesCard";
import Github from "../components/Github";

function page() {
  return (
    <div className="flex animate-fade-in-up flex-col mx-auto justify-center items-center mt-10">
      <p className="mt-6 text-2xl md:text-3xl font-bold">
        Where I worked before
      </p>
      <ExperiencesCard />
      <Github />
    </div>
  );
}

export default page;
