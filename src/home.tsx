import coin from './coin.svg';

// eslint-disable-next-line react/prop-types
export const HomePage = ({count, clickOnMe}) => {

  return (
    <>
      <div className="app__body-counter">
        <span>Balance:</span>
        <span>{count}</span>
      </div>
      
      <img onClick={() => clickOnMe()} src={coin} alt="" />
      Dimon huy sosi
    </>
  );
};
