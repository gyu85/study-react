import React, { useState } from 'react';

export default function Forms() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );
  const [flavor, setFlavor] = useState('coconut');

  function handleChange(event) {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'essay':
        setEssay(event.target.value);
        break;
      case 'flavor':
        setFlavor(event.target.value);
        break;
      default:
        return false;
    }
  }

  // function handleEssayChange(event) {
  //   setEssay(event.target.value);
  // }

  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} name='essay' onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={flavor} name='flavor' onChange={handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
