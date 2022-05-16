import React from "react";
import styled from '@emotion/styled'

function Square(props) {
  const SquareButton = styled.button({
      background: '#fff',
      border: '1px solid #999',
      float: 'left',
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '34px',
      height: '34px',
      marginRight: '-1px',
      marginTop: '-1px',
      padding: '0',
      textAlign: 'center',
      width: '34px',
  })
  return (
    <SquareButton onClick={props.onClick}>
      {props.value}
    </SquareButton>
  );
}

export default Square;