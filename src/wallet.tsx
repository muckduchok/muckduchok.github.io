import {TonConnectButton, useTonConnectUI} from "@tonconnect/ui-react";
import TonConnect from '@tonconnect/sdk';
import { BackButton } from "@twa-dev/sdk/react";
import {Button, Input} from "antd";
import {useState} from "react";
import WebApp from '@twa-dev/sdk'

export const Wallet = () => {
  const connector = new TonConnect();
  connector.restoreConnection();

  const [tonConnectUI] = useTonConnectUI();
  const [value, setValue] = useState('')

  const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
      messages: [
          {
              address: "UQDvzoUNLy2IUNu9U4Bn8c9nVTXwI-xn9wnBxigWhSA-Lxqn",
              amount: (parseFloat(value) * 1000000000).toString(),
          }
      ]
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const donateMe = async () => {
    console.log('tonConnectUI', tonConnectUI)

    WebApp.HapticFeedback.selectionChanged();
    if (!tonConnectUI.connected) {
      WebApp.showAlert('Please connect wallet to send the transaction!');
    }

    try {
      await tonConnectUI.sendTransaction(transaction)
    } catch (err) {
      console.error('ERROR',err)
    }
  }

  return (
    <div className="wallet">
      <TonConnectButton />
      <div className='wallet__donate'>
        <Input
          inputMode="numeric"
          type={'number'}
          onChange={handleChange}
          value={value}
          suffix="TON" />
        <Button onClick={() => donateMe()} type="primary">Donate Me</Button>
      </div>
      <BackButton onClick={() => window.history.back()} />
    </div>
  );
};
