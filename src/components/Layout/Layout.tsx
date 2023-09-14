import { ReactNode } from "react";

import "./css/style.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return <div className="app-container html body">{children}</div>;
};
