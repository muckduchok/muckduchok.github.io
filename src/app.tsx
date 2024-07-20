import { useState } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { Wallet } from './wallet';

export const App = () => {
  const [count, setCount] = useState(0);

  const clickOnMe = () => {
    setCount(() => count + 1)
  }

  return (
    <div className='app'>
      <div className='app__header'>
        My account
      </div>

      
      <div className='app__body'>
        <Routes>
          <Route path='/' index element={<HomePage count={count} clickOnMe={clickOnMe} />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path="*" element={<Navigate replace to="/dist/" />} />
        </Routes>
      </div>

      <div className='app__footer'>
        <div className="app__footer-btn">
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className="app__footer-btn">
          <NavLink to={'/tasks'}>Tasks</NavLink>
        </div>
        <div className="app__footer-btn">
          <NavLink to={'/wallet'}>Wallet</NavLink>
        </div>
      </div>
    </div>
  );
};
