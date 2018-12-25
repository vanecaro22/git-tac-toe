import React from "react";
import TicTacToe from "./modules/TicTacToe";
import Stats from "./modules/Stats";
import moves from "./yourMoves";
import stats from "./yourStats";

const App = () => (
  <div className="App">
    <h1>Bridge Git-Tac-Toe</h1>
    <TicTacToe moves={moves} />
    <Stats stats={stats} />
  </div>
);

export default App;
