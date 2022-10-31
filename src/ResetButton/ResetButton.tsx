import React from 'react';

interface Props {
    resetBoards: React.MouseEventHandler;
}

const ResetButton: React.FC<Props> = (props) => {
    return (
        <div>
            <button onClick={props.resetBoards}>
                    reset
            </button>
        </div>
    );
};

export default ResetButton;