import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} data-cy="square">
      {props.value}
    </button>
  );
}

export default Square;
