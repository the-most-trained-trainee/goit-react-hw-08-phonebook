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
    const toAdd = { ...contact.newContact }
    try {
      const addingContact = await fetch(baseURL + `/contacts`, {
        method: 'post',
        body: JSON.stringify(toAdd),
        headers: {
          'content-type': 'application/json',
          'authorization': `${contact.key}`
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
      const response = await fetch(baseURL + `/contacts/` + contact.id, {
        method: 'delete',
        headers: {
          'content-type': 'application/json',
          'authorization': `${contact.key}`
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)


const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await fetch(baseURL + `/contacts/${data.id}`, {
        method: 'patch',
        body: JSON.stringify(data.contact),
        headers: {
          'content-type': 'application/json',
          'authorization': `${data.key}`
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)


const clearContacts = createAsyncThunk(
  'contacts/clearContacts',
  async (contact, thunkAPI) => {
    return [];
  }
)
// const clearContacts = createAction("contacts/clearContacts", () => []);

export { fetchContacts, addContact, removeContact, clearContacts, updateContact };