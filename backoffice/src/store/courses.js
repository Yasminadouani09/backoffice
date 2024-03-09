import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//all courses
export const fetchCourses = createAsyncThunk("fetchCourses", async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
});


//one course
export const fetchcourse = createAsyncThunk("fetchcourse", async (id) => {
  try {
    const response = await axios.get("http://localhost:5000/courses/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
});

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    course: null,
    courses: {
      items: [],
      count: 0,
    },
    },
  
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses.items = action.payload;
    });

    builder.addCase(fetchcourse.fulfilled, (state, action) => {
      state.course = action.payload;
    });
    // builder.addCase(fetchCourse.fulfilled, (state, action) => {
    //     state.course = action.payload;
        
    // });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export default coursesSlice.reducer;