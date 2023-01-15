import { configureStore } from "@reduxjs/toolkit";
import phoneBookSliceReducer from './contact_slice.js';
import filterSliceReducer from './filter_slice';
import authSliceReducer from "./auth/auth-slice.js";

export const store = configureStore({
  reducer: {
    contacts: phoneBookSliceReducer,
    filter: filterSliceReducer,
    auth: authSliceReducer,
  },
})
