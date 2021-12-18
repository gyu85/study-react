import React from 'react';
import { createPortal } from 'react-dom';
import ThankyouDialog from './ThankyouDialog';

const Portal = props => {
  return createPortal(props.children, document.getElementById('portal'));
};

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
