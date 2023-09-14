import { ReactNode } from "react";

import "./css/style.css";

interface ContentSectionProps {
  children: ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = (props) => {
  const { children } = props;
  return <div className="app-content">{children}</div>;
};
