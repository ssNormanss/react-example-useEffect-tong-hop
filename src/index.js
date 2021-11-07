import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

//Fake comment
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
emitComment(4);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
