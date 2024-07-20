import coin from './coin.svg';

interface HomePageProps {
  count: number;
  effects: any;
  energy: number;
  clickOnMe: (event: any) => void;
}

export const HomePage = ({count, energy, effects, clickOnMe}: HomePageProps) => {
  const handleClick = (event: any) => {
    clickOnMe(event);
  }

  return (
    <>
      <div className="app__body__counter">
        <div className="app__body__counter-balance">
          <span>{count}</span>
        </div>

        <div className="app__body__counter-img">
          <img onClick={(e) => handleClick(e)} src={coin} alt=""/>
          {effects.map((effect: any) => (
            <div
              key={effect.key}
              className="fly-text"
              style={{
                position: 'absolute',
                fontSize: '32px',
                zIndex: '0',
                pointerEvents: 'none',
                left: `${effect.x}px`,
                top: `${effect.y}px`,
                animation: 'fly-up 0.5s ease forwards'
              }}
            >
              +1
            </div>
          ))}
        </div>

        <div className="app__body__counter-energy">
          <span>{energy} / 5000</span>
          <div className="energy-stroke"></div>
        </div>
      </div>
    </>
  );
};
