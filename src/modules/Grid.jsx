import React from "react";

import "./Grid.css";

const Cell = ({ cell }) => (
  <div className="Cell">
    <span className="Entry">{cell}</span>
  </div>
);

const Row = ({ row }) => (
  <div className="Row">
    {row.map((cell, i) => (
      <Cell key={i} cell={cell} />
    ))}
  </div>
);

const Grid = ({ moves }) => (
  <div className="Grid">
    {moves.map((row, i) => (
      <Row key={i} row={row} />
    ))}
  </div>
);

export default Grid;
