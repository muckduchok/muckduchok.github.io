import {useEffect, useState} from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { Wallet } from './wallet';
import WebApp from '@twa-dev/sdk'

export const App = () => {
  const [count, setCount] = useState(0);

  const clickOnMe = () => {
    setCount(() => count + 1)
  }

  useEffect(() => {
    WebApp.ready();
    WebApp.headerColor = '#070F2B';
    WebApp.backgroundColor = '#070F2B';
  }, [])

  return (
    <div className='app'>
      <div className='app__header'>
        My account
      </div>

      
      <div className='app__body'>
        <Routes>
          <Route path='/' index element={<HomePage count={count} clickOnMe={clickOnMe} />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>

      <div className='app__footer'>
        <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to={'/tasks'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          Tasks
        </NavLink>
        <NavLink to={'/wallet'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          Wallet
        </NavLink>
      </div>
    </div>
  );
};
