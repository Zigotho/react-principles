import { useState } from 'react';
import './index.css';

export const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <h1>
          Counter:
          {count}
        </h1>
        <button type="submit" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is
          {count}
        </button>
      </div>
    </div>
  );
};
