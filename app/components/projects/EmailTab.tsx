import { emailProjectList } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

type EmailTabProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const EmailTab = ({ projectRef }: EmailTabProps) => {
  return <ProjectCard cardData={emailProjectList} projectRef={projectRef} />;
};

export default EmailTab;
