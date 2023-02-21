import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lightoff, lighton, roomState } from '../Redux_Manage/LightSlice';
import './LightStatus.css'

function LightStatus() {
  const dispatch = useDispatch();
  const count = useSelector(roomState);

  return (
    <div>
      <button onClick={() => dispatch(lighton())}>Light ON</button>
      <button onClick={() => dispatch(lightoff())}>Light OFF</button>
      <div className={count === "ON" ? "room lit" : "room dark"}>
      <label>Light <b>{count}</b> </label>
      </div>
    </div>
  );
}

export default LightStatus;
