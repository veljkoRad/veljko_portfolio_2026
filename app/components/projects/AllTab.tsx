import { allProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

const AllTab = () => {
  return <ProjectCard cardData={allProjectList} />;
};

export default AllTab;
