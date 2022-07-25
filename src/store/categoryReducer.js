import { createSlice } from "@reduxjs/toolkit";

const categoryReducer = createSlice({
  name: "category",
  initialState: false,
  reducers: {
    show: (state, action) => {
      return (state = true);
    },
    hide: (state, action) => {
      return (state = false);
    },
    change: (state, action) => {
      return (state = !state)
    } 
  },
});

export default categoryReducer.reducer;
export const { show, hide, change } = categoryReducer.actions;