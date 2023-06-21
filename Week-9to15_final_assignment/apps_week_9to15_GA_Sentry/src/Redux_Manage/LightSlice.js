import { createSlice } from '@reduxjs/toolkit';

const lightSlice = createSlice({
  name: 'light',
  initialState: {
    value: '',
  },
  reducers: {
    lighton: state => {
      state.value = "ON";
    },
    lightoff: state => {
      state.value = "OFF" ;
    },
  },
});

export const { lighton, lightoff } = lightSlice.actions;

export const roomState = state => state.light.value;

export default lightSlice.reducer;
