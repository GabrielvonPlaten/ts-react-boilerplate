import React, { useState } from 'react';
import './Home.sass';

const Home: React.FC = () => {
  const [count, setData] = useState<number>(0);

  return (
    <div className="app">
      <h1 className="title">Hello React!</h1>
      <button onClick={() => setData(count + 1)}>+</button>
      <button onClick={() => setData(count - 1)}>-</button>
      <button onClick={() => setData(0)}>Reset</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home
