import React from 'react';
import PropTypes from 'prop-types';

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: 'Mark',
  age: 7
};

PropComponent.proptTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
