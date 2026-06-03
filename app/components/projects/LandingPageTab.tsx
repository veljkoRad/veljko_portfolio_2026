import { landingPageList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

type LandingPageTabProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const LandingPageTab = ({ projectRef }: LandingPageTabProps) => {
  return <ProjectCard cardData={landingPageList} projectRef={projectRef} />;
};

export default LandingPageTab;
