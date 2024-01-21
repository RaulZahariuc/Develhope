import React from 'react';
import Age from './Age';

function Welcome({ name, age }) {
  return (
    <div>
      {/* Render the welcome message with the name prop in a strong tag */}
      <p>Welcome, <strong>{name}</strong>!</p>

      {/* Render the Age component, passing the age prop to it */}
      <Age age={age} />
    </div>
  );
}

// Set default values for the name and age props
Welcome.defaultProps = {
  name: 'Guest',
  age: null,
};

export default Welcome;
