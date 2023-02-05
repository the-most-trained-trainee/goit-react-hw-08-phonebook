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

export { register, logIn, logOut };