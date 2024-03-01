import ExperiencesCard from "../components/ExperiencesCard";
import Github from "../components/Github";

function page() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <ExperiencesCard />
      <Github />
    </div>
  );
}

export default page;
