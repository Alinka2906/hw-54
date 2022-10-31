import React, {useState} from 'react';
import Boards from "./Boards/Boards";
import './App.css';
import ResetButton from "./ResetButton/ResetButton";

function App() {
  let newBoards: any[] = [];

  const createItems = () => {
    let i = 0;
    let random = Math.floor(Math.random() * 35) + 1;
    while (i < 36) {
      let board = {};
      if(random === i) {
        board = {id: i, hasItem: true, clicked: false};
      } else {
        board = {id: i, hasItem: false, clicked: false};
      }
      newBoards.push(board);
      i++;
    }
  }

  const [boards, setBoards] = useState(newBoards);

  const [showBoards, setShowBoards] = useState(true);
  const [counter, setCounter] = useState(0);

  // const changeCounter = () => {
  //   const counterCopy = counter;
  //   setCounter(counterCopy);
  // };

  const resetBoards = () => {
    newBoards = [];
    createItems();
    let boardsCopy = [...boards];
    boardsCopy = newBoards;
    setBoards(boardsCopy);
  };


  const changeClicked = (id: number) => {
    const index = boards.findIndex(p => p.id === id);
    const boardsCopy = [...boards];
    const boardCopy = {...boards[index]};
    boardCopy.clicked = true;
    boardsCopy[index] = boardCopy;
    setBoards(boardsCopy);
    console.log('нажали')
  };

  let boardsList: React.ReactNode = null;

  if (showBoards) {
    createItems();
    boardsList = (
        <Boards boards={boards}
                changeClicked={changeClicked}
        />
    );
  }


  return (
    <div className="App">
      {boardsList}
      <ResetButton resetBoards={resetBoards}/>
    </div>

  );
}

export default App;
