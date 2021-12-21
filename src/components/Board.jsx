/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick, winningSquares }) => {
  const renderSquare = position => {
    const iswinningSquares = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        iswinningSquares={iswinningSquares}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
