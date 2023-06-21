import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, increment, selectCount } from '../Redux_Manage/Slice';
import ReactGA from "react-ga";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Add a Step</button>
      <label>You've Walked <b>{count}</b> Steps Today</label>
      <button onClick={() => dispatch(reset())}>Reset Steps</button>
    </div>
  );
}

export default Counter;
