import {useEffect, useState} from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { Wallet } from './wallet';
import WebApp from '@twa-dev/sdk'
import { Button } from 'antd';

export const App = () => {
  const [count, setCount] = useState(0);

  const clickOnMe = () => {
    setCount(() => count + 1)
  }

  const testBtn = () => {
    WebApp.showAlert('hello its test alert')
  }

  useEffect(() => {
    WebApp.ready();
  }, [])

  return (
    <div className='app'>
      <div className='app__header'>
        My account
      </div>

      
      <div className='app__body'>
        <Button onClick={() => testBtn()}>Test Alert</Button>
        <Routes>
          <Route path='/' index element={<HomePage count={count} clickOnMe={clickOnMe} />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path="*" element={<Navigate replace to="/" />} />
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
