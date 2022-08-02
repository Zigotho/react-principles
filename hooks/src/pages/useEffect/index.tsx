import { useEffect, useState } from 'react';
import './index.css';

export const UseEffect = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div className="App">
      <div className="card">
        <h1>
          Counter:
          {count}
        </h1>
        <button type="submit" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is
          {' '}
          {count}
        </button>
      </div>
    </div>
  );
};
