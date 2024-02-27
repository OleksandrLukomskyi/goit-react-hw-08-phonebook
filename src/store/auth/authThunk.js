import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut, signUp } from "api/auth-service";

export const logInThunk = createAsyncThunk('auth/login', async(body) => {
   return await logIn(body)
})

export const logOutThunk = createAsyncThunk('auth/logout', async() => {
   return await logOut()
})

export const getProfileThunk = createAsyncThunk('users/current', async()=>{
   return await getProfile()
})

export const signUpThunk = createAsyncThunk('auth/register',async(body) => {
   return await signUp(body)
})