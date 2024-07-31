import { useState, useRef } from "react";
import "./TicTacToe.css";

let data = ["", "", "", "", "", "", "", "", ""];
export default function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [xWins, setXWins] = useState(0);
  let [oWins, setOWins] = useState(0);
  let [ties, setTies] = useState(0);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
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
    checkWin();
  };

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    if (count === 8) {
      won("Tie");
    }
  };

  const won = (winner) => {
    setLock(true);
    if (titleRef.current) {
      if (winner === "Tie") {
        titleRef.current.innerHTML = `It's a tie!`;
        setTies(ties + 1);
      } else {
        titleRef.current.innerHTML = `${winner} wins!`;
        if (winner === "X") {
          setXWins(xWins + 1);
        } else if (winner === "O") {
          setOWins(oWins + 1);
        }
      }
    }
    setTimeout(resetGame, 1000);
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    Array.from(document.getElementsByClassName("board")).forEach((board) => {
      board.innerHTML = "";
    });
    if (titleRef.current) {
      titleRef.current.innerHTML = "Tic Tac Toe Game";
    }
  };

  const handleManualReset = () => {
    resetGame();
    setXWins(0);
    setOWins(0);
    setTies(0);
  };

  return (
    <div id="gameContainer">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game
      </h1>
      <div id="scoreboard">
        <p>X Wins: {xWins}</p>
        <p>Ties: {ties}</p>
        <p>O Wins: {oWins}</p>
      </div>
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
      <button className="reset" onClick={handleManualReset}>
        Reset game
      </button>
    </div>
  );
}
