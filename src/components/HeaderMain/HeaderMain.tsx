import { HeaderLeft } from "../HeaderLeft/HeaderLeft";
import { HeaderMessagesBtn } from "../HeaderMessagesBtn/HeaderMessagesBtn";
import { HeaderRight } from "../HeaderRight/HeaderRight";

import "./css/style.css";

export const HeaderMain = () => {
  return (
    <div className="app-header">
      <HeaderLeft />
      <HeaderRight />
      <HeaderMessagesBtn />
    </div>
  );
};
