import React from "react";
import Board from "./modules/Board";
import TicTacToe from "./modules/TicTacToe";
import game from "./modules/game";

const App = () => (
  <Board>
    <TicTacToe game={game} />
  </Board>
);

export default App;
