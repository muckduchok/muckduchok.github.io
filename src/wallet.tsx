import {TonConnectButton, useTonConnectUI} from "@tonconnect/ui-react";
import TonConnect from '@tonconnect/sdk';
import { BackButton } from "@twa-dev/sdk/react";
import {Button, Input} from "antd";
import {useEffect, useState} from "react";
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

  const donateMe = async () => {
    WebApp.HapticFeedback.selectionChanged();
    if (!connector.connected) {
      WebApp.showAlert('Please connect wallet to send the transaction!');
    }

    console.log('transaction', transaction)
    console.log('tonConnectUI', tonConnectUI)

    try {
      await tonConnectUI.sendTransaction(transaction)
    } catch (err) {
      console.error('ERROR',err)
    }
  }

  useEffect(() => {
    // console.log('connector', connector)
  }, [connector])

  return (
    <div className="wallet">
      <TonConnectButton />
      <div className='wallet__donate'>
        <Input type={'number'} onChange={(e: any) => setValue(e.target.value)} value={value} suffix="TON" />
        <Button onClick={() => donateMe()} type="primary">Donate Author</Button>
      </div>
      <BackButton onClick={() => window.history.back()} />
    </div>
  );
};
