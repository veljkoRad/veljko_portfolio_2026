import { emailProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

const EmailTab = () => {
  return <ProjectCard cardData={emailProjectList} />;
};

export default EmailTab;
