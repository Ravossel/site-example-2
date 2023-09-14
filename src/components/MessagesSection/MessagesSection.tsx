import { ReactNode } from "react";
import { MessagesHeader } from "../MessagesHeader/MessagesHeader";

import "./css/style.css";

interface MessagesSectionProps {
  children: ReactNode;
}

export const MessagesSection: React.FC<MessagesSectionProps> = (props) => {
  const { children } = props;
  return (
    <div className="messages-section">
      <button className="messages-close btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-x-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      <MessagesHeader />
      {children}
    </div>
  );
};
