import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactBasics from './react-basics';
import ReactStylingLibs from './react-styling-libs';

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reactBasics' element={<ReactBasics />} />
        <Route path='/reactStylingLibs' element={<ReactStylingLibs />} />

        <Route path='*' element={<Navigate to='/reactBasics' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
