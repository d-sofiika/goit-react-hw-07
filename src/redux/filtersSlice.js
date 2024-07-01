import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 nameFilter: ""
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      changeFilter: (state, { payload }) => {
              state.nameFilter = payload; 
            
        }
         } 

})

export const {changeFilter} = filterSlice.actions;
export const selectNameFilter = (state) =>  state.filters.nameFilter;
export const filterReducer = filterSlice.reducer;