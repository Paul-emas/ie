import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  registerData: null,
  authPin: null,
  userProviders: null,
  userTransactions: null,
  userWalletTransactions: null,
  userMeters: null,
  showModal: '',
  walletBalance: '0.00',
  openNav: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.me = payload;
    },
    setRegisterData: (state, { payload }) => {
      state.registerData = payload;
    },
    setAuthPin: (state, { payload }) => {
      state.authPin = payload;
    },
    setUserProviders: (state, { payload }) => {
      state.userProviders = payload;
    },
    setUserTransactions: (state, { payload }) => {
      state.userTransactions = payload;
    },
    setUserMeter: (state, { payload }) => {
      state.userMeters = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
    setWalletBalance: (state, { payload }) => {
      state.walletBalance = payload;
    },
    setUserWalletTransactions: (state, { payload }) => {
      state.userWalletTransactions = payload;
    },
    setOpenNav: (state, { payload }) => {
      state.openNav = payload;
    },
  },
});

export const {
  setUser,
  setRegisterData,
  setAuthPin,
  setUserProviders,
  setUserTransactions,
  setUserMeter,
  setShowModal,
  setWalletBalance,
  setUserWalletTransactions,
  setOpenNav,
} = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
