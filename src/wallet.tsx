import {TonConnectButton, useTonConnectUI} from "@tonconnect/ui-react";
import {Button, Input} from "antd";
import {useState} from "react";

export const Wallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [value, setValue] = useState('')

  const transaction: any = {
    validUntil: Math.floor(Date.now() / 1000) + 10,
    message: [
      {
        address: '0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F',
        amount: value
      }
    ]
  }

  const donateMe = async () => {
    console.log('transaction', transaction)
    console.log('tonConnectUI', tonConnectUI)
    try {
      const result = await tonConnectUI.sendTransaction(transaction)
      console.log('result', result)
    } catch (err) {
      console.error('ERROR',err)
    }
  }

  return (
    <div className="wallet">
      <TonConnectButton />
      <div className='wallet__donate'>
        <Input type={'number'} onChange={(e: any) => setValue(e.target.value)} value={value} suffix="TON" />
        <Button onClick={() => donateMe()} type="primary">Donate Author</Button>
      </div>
    </div>
  );
};
