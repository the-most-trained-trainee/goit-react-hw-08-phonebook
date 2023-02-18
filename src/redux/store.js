import { configureStore, combineReducers } from "@reduxjs/toolkit";
import phoneBookSliceReducer from './contact_slice.js';
import filterSliceReducer from './filter_slice';
import authSliceReducer from "./auth/auth-slice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  contacts: phoneBookSliceReducer,
  filter: filterSliceReducer,
  auth: authSliceReducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);

export default store;
