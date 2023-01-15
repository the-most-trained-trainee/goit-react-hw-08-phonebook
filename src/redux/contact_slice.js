import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./operations";

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeContact.pending](state) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(contact => contact.id === action.meta.arg);
      state.contacts.splice(index, 1);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default phoneBookSlice.reducer;

