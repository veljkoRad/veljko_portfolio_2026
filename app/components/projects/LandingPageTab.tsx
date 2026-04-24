import { landingPageList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

const LandingPageTab = () => {
  return <ProjectCard cardData={landingPageList} />;
};

export default LandingPageTab;
