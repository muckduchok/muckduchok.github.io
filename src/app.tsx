import {useEffect, useState} from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { Wallet } from './wallet';
import WebApp from '@twa-dev/sdk'
import {HomeOutlined, UnorderedListOutlined, WalletOutlined} from "@ant-design/icons";
import {Stats} from "./stats";

export const App = () => {
  const [count, setCount] = useState(0);
  const [energy, setEnergy] = useState(5000);
  const [effects, setEffects] = useState([]);

  const addCountAnimation = (event: any) => {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left + 100;
    const y = event.clientY - rect.top + 70;

    const key = Date.now() + Math.random();

    console.log('x', x)
    console.log('y', y)
    console.log('rect', rect)

    setEffects([...effects, { key, x, y }]);
  }

  const clickOnMe = (event: any) => {
    handleHaptic();
    setCount(() => count + 1)
    setEnergy(() => energy - 1)
    addCountAnimation(event);
    localStorage.setItem('count', count.toString());
  }

  const handleHaptic = () => {
    WebApp.HapticFeedback.selectionChanged();
  }

  useEffect(() => {
    const saveCount = localStorage.getItem('count');
    WebApp.ready();
    WebApp.expand();
    WebApp.headerColor = '#070F2B';
    WebApp.backgroundColor = '#070F2B';

    if (saveCount) {
      setCount(Number(saveCount) + 1);
    }
  }, [])

  useEffect(() => {
    const now = Date.now();
    const newEffects = effects.filter(effect => now - effect.key < 500);

    if (newEffects.length !== effects.length) {
      setEffects(newEffects);
    }
  }, [effects]);

  return (
    <div className='app'>
      <div className='app__header'>
        My account
      </div>

      
      <div className='app__body'>
        <Routes>
          <Route path='/' index element={<HomePage count={count} energy={energy} effects={effects} clickOnMe={clickOnMe} />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/stats' element={<Stats />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>

      <div className='app__footer'>
        <NavLink
          to={'/'}
          onClick={() => handleHaptic()}
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          <HomeOutlined />
          <span>Home</span>
        </NavLink>

        <NavLink

          to={'/wallet'}
          onClick={() => handleHaptic()}
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          <WalletOutlined />
          <span>Wallet</span>
        </NavLink>

        <NavLink
          to={'/stats'}
          onClick={() => handleHaptic()}
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
          <UnorderedListOutlined />
          <span>Stats</span>
        </NavLink>
      </div>
    </div>
  );
};
