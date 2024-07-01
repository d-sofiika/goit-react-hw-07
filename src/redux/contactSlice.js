import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./contactsOps"
import { selectNameFilter } from "./filtersSlice";



const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactSlice = createSlice({
    name: 'contact',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
  },extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null;
        state.items = action.payload
      })
      .addCase(fetchContact.rejected, handleRejected)
      
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idToDelete = action.payload;
      state.items = state.items.filter(contact => contact.id !== idToDelete);
      })
      .addCase(deleteContact.rejected, handleRejected)

  },
         } 

)

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterContact)=> {
    if (!filterContact) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  })
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const contactReducer = contactSlice.reducer;