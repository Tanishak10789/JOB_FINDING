import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,  // This is the state for the user
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;  // Sets loading state
    },
    setUser: (state, action) => {
      state.user = action.payload;  // Sets user state
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
