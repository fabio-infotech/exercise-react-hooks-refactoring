import React, { useContext } from 'react';
import { Context } from './context/Provider';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

function renderSignal(signalColor) {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  const { signal, changeSignal } = useContext(Context);
  const { color } = signal;

  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
          </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
          </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
          </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
  );
};

export default TrafficSignal;
