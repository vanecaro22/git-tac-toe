import React from "react";
import "./TicTacToe.css";

const Cell = ({ value }) => (
  <div className="Cell">
    <span className="Entry">{value}</span>
  </div>
);

const Row = ({ row }) => (
  <div className="Row">
    {row.map((value, i) => (
      <Cell key={i} value={value} />
    ))}
  </div>
);

const TicTacToe = ({ game }) => (
  <div className="TicTacToe">
    {game.map((row, i) => (
      <Row key={i} row={row} />
    ))}
  </div>
);

export default TicTacToe;
