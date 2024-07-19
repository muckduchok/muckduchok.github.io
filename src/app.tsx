import React, { useState } from 'react';
import coin from './coin.svg';

export const App = () => {
  const [count, setCount] = useState(0);

  const clickOnMe = (e: any) => {
    setCount(() => count + 1)
  }

  return (
    <div className='app'>
      <div className='app__header'>
        My account
      </div>

      <div className='app__body'>
        <div className="app__body-counter">
          <span>Balance:</span>
          <span>{count}</span>
        </div>
       
        <img onClick={(e) => clickOnMe(e)} src={coin} alt="" />
        Dimon huy sosi
      </div>

      <div className='app__footer'>
        <div className="app__footer-btn">
          <span>Home</span>
        </div>
        <div className="app__footer-btn">
          <span>Tasks</span>
        </div>
        <div className="app__footer-btn">
          <span>Frens</span>
        </div>
      </div>
    </div>
  );
};
