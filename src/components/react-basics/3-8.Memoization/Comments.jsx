import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments({ comentList }) {
  const handleClick = useCallback(() => {
    console.log('눌림');
  }, []);

  return (
    <div>
      {comentList.map(comment => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          //onClick={() => console.log('눌림')} // 인라인으로 선언 하면 memo를 쓸 수 없다. 새로 함수가 매번 새로 생성되기 때문이다.
          onClick={handleClick} // 함수를 새로 만든다고 할 지라도 Comment가 새로 호출이 되기 때문에 memo가 작동 하지 않는다. 이럴 때 useCallback 쓴다.
        />
      ))}
    </div>
  );
}
