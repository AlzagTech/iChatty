import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Message from "../components/Message";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((item) => (
        <Message message={item} key={item.id} />
      ))}
    </div>
  );
};

export default Messages;
