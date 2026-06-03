import { reactProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

type ReactTabProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const ReactTab = ({ projectRef }: ReactTabProps) => {
  return <ProjectCard cardData={reactProjectList} projectRef={projectRef} />;
};

export default ReactTab;
