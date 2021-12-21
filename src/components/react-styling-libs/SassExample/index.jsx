import React from 'react';
import './SassExample.scss';

export default function index() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='#none'>test</a>
          </li>
          <li>
            <a href='#none'>test2</a>
          </li>
          <li>
            <a href='#none'>test3</a>
          </li>
        </ul>
      </nav>
      <p>Example</p>
      <p className='example'>Example</p>
      <p className='base-test'>Base Example</p>
      <p className='inverse'>Inverse Test</p>
      <p className='info'>Mixin Test 1</p>
      <p className='alert'>Mixin Test 2</p>
      <p className='success'>Mixin Test 3</p>
      <p className='message'>Extend Test1</p>
      <p className='success2'>Extend Test2</p>
      <p className='error'>Extend Test3</p>
      <p className='warning'>Extend Test4</p>
      <div className='square-av'></div>
      <div className='circle-av'></div>
      <div className='sidebar'></div>
      <div className='gray'>Interpolation test</div>
      <button className='button'>벤더프리픽스</button>
    </div>
  );
}
