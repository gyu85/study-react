import React from 'react';
import withLoading from './withLoaing';

function Input() {
  return <input defaultValue='input' />;
}

export default withLoading(Input);
