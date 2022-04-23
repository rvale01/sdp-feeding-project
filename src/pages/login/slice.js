import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const loginUser = createAsyncThunk('login', async ({email, password}) => {
      const response = await axios.request("/login", {params: {email, password}})
      return response
})

export const loginSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload.response !== 'Not found'){
                state.status = 'loading'
                sessionStorage.setItem("sessionId", action.payload.data.sessionId)
                localStorage.setItem("role", action.payload.data.role)
                window.location.reload();
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'error'
        })
    },
  })
  
export const statusSelector = state => state.login.status
export const errorSelector = state => state.login.error

export default loginSlice.reducer