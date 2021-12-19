import React, { Fragment } from 'react';
import List from './List';

const tahoePeaks = [
  { name: 'Freel Peak', elevation: 10891 },
  { name: 'Monument Peak', elevation: 10067 },
  { name: 'Pyramid Peak', elevation: 9983 },
  { name: 'Mt. Tallac', elevation: 9735 }
];

export default function PeakList() {
  return (
    <List
      data={tahoePeaks}
      renderEmpty={<p>This list is Empty.</p>}
      renderItem={item => (
        <Fragment>
          {item.name} - {item.elevation.toLocaleString()}ft
        </Fragment>
      )}
    />
  );
}
