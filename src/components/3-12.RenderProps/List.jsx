import React from 'react';

export default function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, index) => (
        <li key={`list-${index}`}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
