import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic
} from "react-chat-engine-advanced";

const ChatsPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    "8745e59c-b3bf-4806-ba03-ceab943f3333",
    user.username,
    user.username
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};

export default ChatsPage;
