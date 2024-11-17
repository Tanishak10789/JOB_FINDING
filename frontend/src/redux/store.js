// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';  // Import your authSlice

const store = configureStore({
  reducer: {
    auth: authSlice,  // Use authSlice here
  },
});

export default store;
