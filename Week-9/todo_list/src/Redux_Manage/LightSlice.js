import { createSlice } from '@reduxjs/toolkit';

const lightSlice = createSlice({
  name: 'light',
  initialState: {
    value: '',
  },
  reducers: {
    increment: state => {
      state.value = "ON";
    },
    reset: state => {
      state.value = "OFF" ;
    },
  },
});

export const { increment, reset } = lightSlice.actions;

export const kk = state => state.light.value;

export default lightSlice.reducer;
