import { useState } from "react";
import "./TicTacToe.css";

let data = ["", "", "", "", "", "", "", "", ""];
export default function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = "X";
      data[num] = "X";
    } else {
      e.target.innerHTML = "O";
      data[num] = "O";
    }
    setCount(count + 1);
  };

  return (
    <div id="gameContainer">
      <h1 className="title">Tic Tac Toe Game</h1>
      <div id="boardContainer">
        <div className="board" onClick={(e) => toggle(e, 0)}></div>
        <div className="board" onClick={(e) => toggle(e, 1)}></div>
        <div className="board" onClick={(e) => toggle(e, 2)}></div>
        <div className="board" onClick={(e) => toggle(e, 3)}></div>
        <div className="board" onClick={(e) => toggle(e, 4)}></div>
        <div className="board" onClick={(e) => toggle(e, 5)}></div>
        <div className="board" onClick={(e) => toggle(e, 6)}></div>
        <div className="board" onClick={(e) => toggle(e, 7)}></div>
        <div className="board" onClick={(e) => toggle(e, 8)}></div>
      </div>
      <button className="reset" onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
}
