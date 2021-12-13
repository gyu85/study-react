import React from 'react';
import withLoading from './withLoaing';

function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);
