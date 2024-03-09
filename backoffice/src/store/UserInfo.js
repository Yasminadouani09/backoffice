import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: {
      fristName: "",
      lastName: "",
      Email: "",
      Phone: "",
      dateOfBirth: "",
      adress: "",
      occupation: "",
      studies: "",
      college: "",
      degree: "",
      src: "",
      },
      reducers: {
          userInfo: (state, action) => {
              state.value=action.payload
    
          }
      }
  },
});

export const {userInfo} = userSlice.actions
export default userSlice.reducer;