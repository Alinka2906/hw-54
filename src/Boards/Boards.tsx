import React from 'react';
import './Boards.css';
import {BoardsType} from "../types";
import Board from "../Board/Board";

interface Props {
    boards: BoardsType [];
    changeClicked: (id: number) => void;
}

const Boards: React.FC<Props> = ({boards, changeClicked}) => {
  return (
    <div className='Boards'>
            {boards.map((board) => (
                <Board hasItem={board.hasItem} clicked={board.clicked} id={board.id} onHeaderClick={() => changeClicked(board.id)}/>
            ))}
    </div>
  );
};

export default Boards;