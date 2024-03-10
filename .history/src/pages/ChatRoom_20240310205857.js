import React from "react";
import "./chatRoom.scss";

export default function ChatRoom() {
  return (
    <div class="chat">
      <div class="contact bar">
        <div class="pic stark"></div>
        <div class="name">Tony Stark</div>
        <div class="seen">Today at 12:56</div>
      </div>
      <div class="messages" id="chat">
        <div class="time">Today at 11:41</div>
        <div class="message parker">Hey, man! What's up, Mr Stark? 👋</div>
        <div class="message stark">Kid, where'd you come from?</div>
        <div class="message parker">Field trip! 🤣</div>
        <div class="message parker">
          Uh, what is this guy's problem, Mr. Stark? 🤔
        </div>
        <div class="message stark">
          Uh, he's from space, he came here to steal a necklace from a wizard.
        </div>
      </div>
      <div class="input">
        <input placeholder="Type your message here!" type="text" />
        <button></button>Send</button>
      </div>
    </div>
  );
}
