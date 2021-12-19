import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RouterBasics from './react-basics';

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reactBasics' element={<RouterBasics />} />

        <Route path='*' element={<Navigate to='/reactBasics' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
