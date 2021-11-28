import React, { useState } from 'react';

export default function Forms() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('work');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type='text' value={value} onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
