import React from "react";
import styled from "@emotion/styled";

function Square(props) {
  const SquareButton = styled.button({
    background: "#f0f8ff",
    border: "1px solid #999",
    float: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "34px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: "0",
    textAlign: "center",
    width: "34px",
  });
  return (
    <SquareButton className="square" onClick={props.onClick} data-cy="square">
      {props.value}
    </SquareButton>
  );
}

export default Square;
