import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (token, thunkAPI) => {
    try {
      const response = await fetch(baseURL + `/contacts`, {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'authorization': `${token}`
        }
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const toAdd = { 'name': contact.name, 'phone': contact.number }


    try {
      console.log(toAdd);

      const addingContact = await fetch(baseURL + `/contacts`, {
        method: 'post',
        body: JSON.stringify(toAdd),
        headers: {
          'content-type': 'application/json',
          'authorization': ``
        }
      });
      const addingContactJSON = addingContact.json();
      return addingContactJSON;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contact, thunkAPI) => {
    try {
      const response = await fetch(baseURL + `/contacts/` + contact, {
        method: 'delete',
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export { fetchContacts, addContact, removeContact };