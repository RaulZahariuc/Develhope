import React from 'react';
import Age from './Age';

function Welcome({ name, age }) {
  return (
    <div>
      {/* Render the welcome message with the name prop in a strong tag */}
      <p>Welcome, <strong>{name}</strong>!</p>

      {/* Render the Age component based on different conditions */}
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {(age > 18 && age < 65) && <Age age={age} />}
      {(age > 18 && age < 65 && name === "John") && <Age age={age} />}
    </div>
  );
}

// Set default values for the name and age props
Welcome.defaultProps = {
  name: 'Guest',
  age: null,
};

export default Welcome;

