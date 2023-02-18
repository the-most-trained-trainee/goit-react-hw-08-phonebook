import { createAsyncThunk } from "@reduxjs/toolkit";



const baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const registerUser = await fetch(baseURL + `/users/signup`, {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json',
      },
    });
    const registerUserJSON = registerUser.json();
    return registerUserJSON;
  } catch (error) {
    console.log(error);
  }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const enteringUser = await fetch(baseURL + `/users/login`, {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    });
    const enteringUserJSON = enteringUser.json();
    return enteringUserJSON;
  } catch (error) {
    console.log(error);
  }
})

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const leavingUser = await fetch(baseURL + `/users/logout`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'authorization': `${credentials}`
      }
    });
    const leavingUserJSON = leavingUser.json();
    return leavingUserJSON;
  } catch (error) {
    console.log(error);
  }
})

const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await fetch(baseURL + `/users/current`, {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'authorization': `${persistedToken}`
        }
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { register, logIn, logOut, refreshUser };