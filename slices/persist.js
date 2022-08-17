import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  isLoggedIn: false,
  userPhone: null,
  email: null,
  quickbuy: false,
  anonymousToken: null,
  firstTimeUser: true,
};

const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    setUserPhone: (state, { payload }) => {
      state.userPhone = payload;
    },
    setUserEmail: (state, { payload }) => {
      state.email = payload;
    },
    setQuickBuy: (state, { payload }) => {
      state.quickbuy = payload;
    },
    setAnonymousToken: (state, { payload }) => {
      state.anonymousToken = payload;
    },
    setFirstTimeUser: (state, { payload }) => {
      state.firstTimeUser = payload;
    },
    userSignOut: (state) => {
      state.isLoggedIn = false;
      Cookies.remove('token');
    },
  },
});

export const {
  setIsLoggedIn,
  setUserPhone,
  setUserEmail,
  setQuickBuy,
  setAnonymousToken,
  setFirstTimeUser,
  userSignOut,
} = persistSlice.actions;

export const persistSelector = (state) => state.persist;

export default persistSlice.reducer;
