import React from "react";

import Messages from "../components/Messages";
import Input from "../components/Input";

import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Mango</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
