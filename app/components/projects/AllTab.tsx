import { allProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

type AllTabProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const AllTab = ({ projectRef }: AllTabProps) => {
  return <ProjectCard cardData={allProjectList} projectRef={projectRef} />;
};

export default AllTab;
