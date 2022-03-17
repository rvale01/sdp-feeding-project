import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const loginUser = createAsyncThunk('login', async ({email, password}) => {
      const response = await axios.request("/login", {params: {email, password}})
      return response
        // .then((value)=>(value.data === "Not found" ? console.log("Error") : ))
})

export const loginSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
            console.log(action.response, 'response')
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.status = 'success'
                sessionStorage.setItem("sessionId", action.payload.data)
                window.location.reload();
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'error'
            console.log(action.response, 'response')
        })
    },
  })
  
export const statusSelector = state => state.login.status
export const errorSelector = state => state.login.error

export default loginSlice.reducer