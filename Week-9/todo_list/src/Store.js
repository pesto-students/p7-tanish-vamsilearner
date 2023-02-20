import { configureStore } from '@reduxjs/toolkit';
import lightSlice from './Redux_Manage/LightSlice';
import counterSlice from './Redux_Manage/Slice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    light: lightSlice,
  },
});

export default store;
