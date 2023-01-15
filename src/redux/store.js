import { configureStore } from "@reduxjs/toolkit";
import phoneBookSliceReducer from './contact_slice.js';
import filterSliceReducer from './filter_slice';

export const store = configureStore({
  reducer: {
    contacts: phoneBookSliceReducer,
    filter: filterSliceReducer,
  },
})
