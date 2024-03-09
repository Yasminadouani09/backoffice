import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchprograms = createAsyncThunk("fetchprograms", async () => {
  try {
    const response = await axios.get("http://localhost:5000/programs");
    return response.data;
  } catch (error) {
    console.error("Error fetching programs:", error);
    throw error;
  }
});
export const fetchprogram = createAsyncThunk("fetchprogram", async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/programs/"+id
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching program:", error);
    throw error;
  }
});

export const sendprogram = createAsyncThunk("addProgram", async (body) => {
  const response = await axios.post(
    "http://localhost:5000/programs",
    body
  );
  return response.data;
});

export const ProgramSlice = createSlice({
  name: "programs",
  initialState: {
    program: null,
    programs: {
      items: [],
      count: 0,
    },
  },

  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchprograms.fulfilled, (state, action) => {
      state.programs.items = action.payload;
    });
    builder.addCase(fetchprogram.fulfilled, (state, action) => {
        state.program = action.payload;

    });
     builder.addCase(sendprogram.fulfilled, (state, action) => {
       state.program = action.payload;
     });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export default ProgramSlice.reducer;
