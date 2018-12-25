import React from "react";

import Grid from "./Grid";
import Board from "./Board";

const TicTacToe = ({ moves }) => (
  <Board>
    <Grid moves={moves} />
  </Board>
);

export default TicTacToe;
