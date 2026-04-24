import { reactProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

const ReactTab = () => {
  return <ProjectCard cardData={reactProjectList} />;
};

export default ReactTab;
