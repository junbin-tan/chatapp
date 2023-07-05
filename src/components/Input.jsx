import React from "react";
import Img from "../assets/img.png";
import Attach from "../assets/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Message" />
      <div className="send">
        <img src={Attach} alt="attach" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="image" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
