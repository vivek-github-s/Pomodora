import {  createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  }
  ,
  reducers: {
    login: (state,action) => {
      state.value = action.payload ;
    },
    logout: (state) => {
      state.value = null;
    },

  },

});

export const { login, logout } = counterSlice.actions;

export const selectCount = (state) => state.user.user;

export default counterSlice.reducer;
