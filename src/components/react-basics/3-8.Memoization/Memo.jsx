import React, { useState, useEffect } from 'react';
import Comments from './Comments';

const commentList = [
  {
    title: 'comment1',
    content: 'message1',
    likes: 1
  }
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    const interval =
      !isStop &&
      setInterval(() => {
        setComments(prevComment => [
          ...prevComment,
          {
            title: `comment${prevComment.length + 1}`,
            content: `message${prevComment.length + 1}`,
            likes: `${prevComment.length + 1}`
          }
        ]);
      }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isStop]);

  function handleStop() {
    isStop ? setIsStop(false) : setIsStop(true);
  }

  return (
    <>
      <Comments comentList={comments} />
      <button
        type='button'
        onClick={handleStop}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          height: '40px'
        }}
      >
        {isStop ? 'START' : 'STOP'}
      </button>
    </>
  );
}
