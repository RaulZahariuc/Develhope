import React, { useState, useEffect, useRef } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const prevDirectionRef = useRef(null);

  useEffect(() => {
    const direction = count > initialValue ? 'up' : 'down';
    if (direction !== prevDirectionRef.current) {
      console.log('Direction changed:', direction);
      prevDirectionRef.current = direction;
    }
  }, [count, initialValue]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default Counter;
