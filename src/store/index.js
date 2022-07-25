import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer"

const store = configureStore({
  reducer: {categoryReducer}
})
export default store;