import React from 'react';

export default function Event() {
  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };

  const handleCapture2 = () => {
    console.log('handleCapture2');
  };

  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };

  const handleClickBubble = () => {
    console.log('handleClickBubble');
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>button</button>
      </div>
    </div>
  );
}
