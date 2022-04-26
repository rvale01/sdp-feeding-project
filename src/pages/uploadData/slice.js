import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const uploadCSV = createAsyncThunk('add-user', async ({file}) => {
    const data = JSON.stringify({file: file.data})
    
    const response = await axios({
        method: 'POST',
        url: '/upload-csv', 
        headers: { 
            'Content-Type': 'application/json; charset=utf-8'
        },
        data: data,
    })

    return response
})

export const uploadSlice = createSlice({
    name: 'upload',
    initialState:{
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(uploadCSV.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(uploadCSV.fulfilled, (state, action) => {
            if(action.payload.data === 'okay'){
                state.status = 'success'
                window.location.replace("upload-data", "patients-list")
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(uploadCSV.rejected, (state, action) => {
            state.status = 'error'
        })
    },
  })


export const statusSelector = state => state.upload.status
export const errorSelector = state => state.upload.error

export default uploadSlice.reducer