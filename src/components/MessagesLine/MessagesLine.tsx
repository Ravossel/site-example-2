import { MessageBoxes } from "../MessageBoxes/MessageBoxes";

export const MessagesLine = () => {
  return (
    <div className="messages">
      <MessageBoxes role="ONE" />
      <MessageBoxes role="TWO" />
      <MessageBoxes role="THREE" />
      <MessageBoxes role="FOUR" />
    </div>
  );
};
