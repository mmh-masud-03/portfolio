import ExperiencesCard from "../components/ExperiencesCard";
import Github from "../components/Github";

function page() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <p className="mt-6 text-2xl md:text-3xl">Where I worked before</p>
      <ExperiencesCard />
      <Github />
    </div>
  );
}

export default page;
