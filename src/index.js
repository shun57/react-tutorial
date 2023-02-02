import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { Global, css } from "@emotion/react";

const history = [
  {
    squares: Array(9).fill(null),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          font: 14px "Century Gothic", Futura, sans-serif;
          margin: 20px;
        }
        ol,
        ul {
          padding-left: 30px;
        }
        li {
          margin-bottom: 5px;
        }
      `}
    />
    <Game history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
