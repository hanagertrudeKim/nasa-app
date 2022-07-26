import { createSlice } from "@reduxjs/toolkit";

const planetReducer = createSlice({
  name: "category",
  initialState: false,
  reducers: {
    planetsShow: (state, action) => {
      return (state = true);
    },
    planetHide: (state, action) => {
      return (state = false);
    },
    planetChange: (state, action) => {
      return (state = !state)
    } 
  },
});

export default planetReducer.reducer;
export const { planetChange, planetHide, planetsShow } = planetReducer.actions;