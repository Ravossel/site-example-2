import { ReactNode } from "react";
import { ProjectsHeader } from "../ProjectsHeader/ProjectsHeader";

import "./css/style.css";

interface ProjectsSectionProps {
  children: ReactNode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const { children } = props;
  return (
    <div className="projects-section">
      <ProjectsHeader />
      {children}
    </div>
  );
};
