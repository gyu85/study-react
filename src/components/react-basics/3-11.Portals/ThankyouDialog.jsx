import React from 'react';
import Dialog from './Dialog';

export default function ThankyouDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: 'pink' }}>Thanks</h1>}
      description='It is honor to meet you!'
      button={<button style={{ backgroundColor: 'violet' }}>닫기</button>}
    />
  );
}
