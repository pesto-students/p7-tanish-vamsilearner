import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    reset: state => {
      state.value = 0 ;
    },
  },
});

export const { increment, reset } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
