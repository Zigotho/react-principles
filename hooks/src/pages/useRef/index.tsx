import { useRef } from 'react';
import './index.css';

export const UseRef = () => {
  const input = {
    yellow: useRef<HTMLInputElement>(null),
    green: useRef<HTMLInputElement>(null),
    blue: useRef<HTMLInputElement>(null),
    red: useRef<HTMLInputElement>(null)
  };

  return (
    <div className="App">
      <div className="card">
        <div>
          <input className="bg-yellow" type="text" ref={input.yellow} />
          <input className="bg-green" type="text" ref={input.green} />
          <input className="bg-blue" type="text" ref={input.blue} />
          <input className="bg-red" type="text" ref={input.red} />
        </div>
        <div>
          <button type="submit" onClick={() => input.yellow.current?.focus()} className="bg-yellow">focus in yellow input</button>
          <button type="submit" onClick={() => input.green.current?.focus()} className="bg-green">focus in green input </button>
          <button type="submit" onClick={() => input.blue.current?.focus()} className="bg-blue">focus in blue input</button>
          <button type="submit" onClick={() => input.red.current?.focus()} className="bg-red">focus in red input</button>
        </div>
      </div>
    </div>
  );
};
