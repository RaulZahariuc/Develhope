import React from 'react';

function Age({ age }) {
  return age ? <p>Your age is {age}.</p> : null;
}

export default Age;
