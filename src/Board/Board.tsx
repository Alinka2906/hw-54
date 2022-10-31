import React from 'react';
interface Props {
    hasItem: boolean;
    onHeaderClick: React.MouseEventHandler;
    id: number;
    clicked: boolean;
}


const Board: React.FC<Props> = (props) => {
    const counterStyle: React.CSSProperties = {
        background: 'black',
    }
    let symbol = '';
    let hasItem = props.hasItem;
    if (hasItem) {
        symbol = '*';
    } else {
        symbol = '';
    }

    if (props.clicked) {
        counterStyle.background = 'white';
    }

    if (!props.clicked) {
        counterStyle.background = 'black';
    }

    return (
        <div className='Board' style={counterStyle} onClick={props.onHeaderClick}>
            <div className='Symbol'>{symbol}</div>
        </div>
    );
};

export default Board;