import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter-container">
      <h1 className="Counter-heading">{count}</h1>
      <button
        className="Counter-button"
        onClick={() => setCount(count + 1)}
      >
        Contar +1
      </button>
    </div>
  );
}

export default Counter;
