import "./styles.css";
import { useState } from "react";
import Content from "./Content";
import Countdown from "./Countdown";
import PreviewAvatar from "./PreviewAvatar";
import FakeChat from "./FakeChat";
import Timer from "./Timer";

export default function App() {
  const [show, setShow] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showPreviewAvatar, setShowPreviewAvatar] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="App">
      <div className="box">
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle Content
        </button>
        {show && <Content />}
      </div>

      <div className="box">
        <button
          onClick={() => {
            setShowCountdown(!showCountdown);
          }}
        >
          Toggle CountDown
        </button>
        {showCountdown && <Countdown />}
      </div>

      <div className="box">
        <button
          onClick={() => {
            setShowPreviewAvatar(!showPreviewAvatar);
          }}
        >
          Toggle PreviewAvatar
        </button>
        {showPreviewAvatar && <PreviewAvatar />}
      </div>
      <div className="box">
        <button
          onClick={() => {
            setShowChat(!showChat);
          }}
        >
          Toggle FakeChat
        </button>
        {showChat && <FakeChat />}
      </div>
      <Timer />
    </div>
  );
}
