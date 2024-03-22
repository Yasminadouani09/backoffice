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
//addprogram

// Action types
export const PROGRAM_ADDED = 'PROGRAM_ADDED';
export const PROGRAM_ADD_FAILED = 'PROGRAM_ADD_FAILED';

// Action creators
export const programAdded = (program) => ({
  type: PROGRAM_ADDED,
  payload: program,
});

export const programAddFailed = (error) => ({
  type: PROGRAM_ADD_FAILED,
  payload: error,
});

export const addProgram =(programData) => async (dispatch) => {
  try{
  const response = await axios.post(
    "http://localhost:5000/programs", programData);
    dispatch(programAdded(response.data));
} catch (error) {
  dispatch(programAddFailed(error.message));
}
};

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
    //  builder.addCase(addProgram.fulfilled, (state, action) => {
    //    state.program = action.payload;
    //  });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export default ProgramSlice.reducer;
