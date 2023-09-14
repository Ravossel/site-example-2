import { ContentSection } from "../components/ContentSection/ContentSection";
import { HeaderMain } from "../components/HeaderMain/HeaderMain";
import { Layout } from "../components/Layout/Layout";
import { MessagesLine } from "../components/MessagesLine/MessagesLine";
import { MessagesSection } from "../components/MessagesSection/MessagesSection";
import { ProjectsBoxes } from "../components/ProjectsBoxes/ProjectsBoxes";
import { ProjectsLine } from "../components/ProjectsLine/ProjectsLine";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const MainPage = () => {
  return (
    <Layout>
      <HeaderMain />
      <ContentSection>
        <Sidebar />
        <ProjectsSection>
          <ProjectsLine />
          <ProjectsBoxes />
        </ProjectsSection>
        <MessagesSection>
          <MessagesLine />
        </MessagesSection>
      </ContentSection>
    </Layout>
  );
};

