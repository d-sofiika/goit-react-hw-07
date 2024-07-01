import { configureStore } from "@reduxjs/toolkit";
import {contactReducer} from "./contactSlice";
import  { filterReducer } from "./filtersSlice";


export const store = configureStore({
  reducer: {
        contacts: contactReducer,
      filters: filterReducer
  }
});
export default store;
