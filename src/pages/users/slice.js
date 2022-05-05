import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import axios from 'axios'

export const getUsers = createAsyncThunk('get-users', async () => {
      const response = await axios.request("/get-users")
      return response
})

export const addUser = createAsyncThunk('add-user', async ({email, password, fullName, role}) => {
    var qs = require('qs');
    var data = qs.stringify({
        email: email,
        password: password,
        full_name: fullName,
        role: role
    });
    
    const response = await axios({
        method: 'POST',
        url: 'add-user', 
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data,
    })

    return response
})

export const usersSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null,
        list: [],
        newUserStatus: "idle",
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.status = 'success'
                state.list = action.payload.data.users
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.status = 'error'
        })

        builder.addCase(addUser.pending, (state, action) => {
            state.newUserStatus = 'loading'
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.newUserStatus = 'success'
                window.location.reload()
            }else{
                state.newUserStatus = 'error'
            }
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.newUserStatus = 'error'
        })
    },
  })


export const statusSelector = state => state.users.status
export const errorSelector = state => state.users.error
export const usersSelector = state => state.users.list
export const newUserStatusSelector = state => state.users.newUserStatus

export default usersSlice.reducer