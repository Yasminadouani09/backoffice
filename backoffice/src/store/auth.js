import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth",
    args
  );
  localStorage.setItem("token", response.data);
  dispatch(getMe());
});
export const getMe = createAsyncThunk("getMe", async () => {
  const response = await axios.get("http://localhost:5000/auth/me");
  return response.data;
});


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload;
    });
  },
});
export default authSlice.reducer;
