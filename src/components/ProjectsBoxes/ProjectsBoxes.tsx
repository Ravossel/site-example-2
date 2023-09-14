import { ProjectsWrapper } from "../ProjectsWrapper/ProjectsWrapper";

import './css/style.css'

export const ProjectsBoxes = () => {
  return (
    <div className="project-boxes jsGridView">
      <ProjectsWrapper role="ONE"></ProjectsWrapper>
      <ProjectsWrapper role="TWO"></ProjectsWrapper>
      <ProjectsWrapper role="THREE"></ProjectsWrapper>
      <ProjectsWrapper role="FOUR"></ProjectsWrapper>
      <ProjectsWrapper role="FIVE"></ProjectsWrapper>
      <ProjectsWrapper role="SIX"></ProjectsWrapper>
    </div>
  );
};
