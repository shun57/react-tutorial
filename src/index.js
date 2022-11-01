import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

const history = [
  {
    squares: Array(9).fill(null),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Game history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
