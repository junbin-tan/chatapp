import React from "react";
import Cam from "../assets/cam.png";
import Img from "../assets/img.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from '../components/Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Img} alt="image" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
