import React from 'react';

interface Props {
  triesCount: number
}

const Counter: React.FC<Props> = ({triesCount}) => {
  const counterStyle: React.CSSProperties = {
    color: 'green',
  }

  if (triesCount <= 2) {
    counterStyle.color = 'red';
  }

  if (triesCount <= 1) {
    counterStyle.fontWeight = 'bold';
  }
  return (
      <p style={counterStyle}>
        Tries: {triesCount}
      </p>
  );
};

export default Counter;