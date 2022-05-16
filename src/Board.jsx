import React from "react";
import Square from "./Square";
import styled from '@emotion/styled'

const BordRow = styled.div({
  '&:after': {
    content:'""',
    display: 'table',
    clear: 'both'
  }
});

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <BordRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BordRow>
        <BordRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BordRow>
        <BordRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BordRow>
      </div>
    );
  }
}

export default Board;
