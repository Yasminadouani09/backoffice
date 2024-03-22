import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

//users lkol 
export const fetchusers = createAsyncThunk("fetchusers", async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

//user wehed 

export const fetchuser = createAsyncThunk("fetchuser", async (id) => {
  try {
    const response = await axios.get("http://localhost:5000/users/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
});

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post(
      "http://localhost:5000/users",
     
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// Action types
export const USER_ADDED = 'USER_ADDED';
export const USER_ADD_FAILED = 'USER_ADD_FAILED';

// Action creators
export const userAdded = (user) => ({
  type: USER_ADDED,
  payload: user,
});

export const userAddFailed = (error) => ({
  type: USER_ADD_FAILED,
  payload: error,
});


 



export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    users: {
      items: [],
      count: 0,
    },
    },
  
  reducers: {
    addUser : (state, action) =>{
      state.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchusers.fulfilled, (state, action) => {
        state.users.items = action.payload;
    });

    builder.addCase(fetchuser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    // builder.addCase(handleSubmit.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // });
    // builder.addCase(fetchCourse.fulfilled, (state, action) => {
    //     state.course = action.payload;
        
    // });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export const {addUser} = userSlice.actions;
export default userSlice.reducer;