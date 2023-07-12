import React, { useContext } from "react";
import Cam from "../assets/cam.png";
import Img from "../assets/img.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from '../components/Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const { data } = useContext(ChatContext);
  
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
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
