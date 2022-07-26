import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "./planetReducer"

const store = configureStore({
  reducer: {planetReducer}
})
export default store;