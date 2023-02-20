import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, increment, kk } from './LightSlice';
import './LightStatus.css'

function LightStatus() {
  const dispatch = useDispatch();
  const count = useSelector(kk);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Light ON</button>
      <button onClick={() => dispatch(reset())}>Light OFF</button>
      <div className={count === "ON" ? "room lit" : "room dark"}>
      <label>Light <b>{count}</b> </label>
      </div>
    </div>
  );
}

export default LightStatus;
