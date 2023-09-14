import { ProjectsStatus } from "../ProjectsStatus/ProjectsStatus";
import { ProjectsViewActions } from "../ProjectsViewActions/ProjectsViewActions";

import "./css/style.css";

export const ProjectsLine = () => {
  return (
    <div className="projects-section-line">
      <ProjectsStatus />
      <ProjectsViewActions />
    </div>
  );
};
