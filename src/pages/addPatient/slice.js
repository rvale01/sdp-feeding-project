import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const addPatient = createAsyncThunk('add-patient', async ({string}) => {
    const data = string
    
    const response = await axios({
        method: 'POST',
        url: '/add-patient',
        headers: { 
            'Content-Type': 'application/json; charset=utf-8'
        },
        data: data,
    })

    return response
})

export const addPatientSlice = createSlice({
    name: 'addPatient',
    initialState:{
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(addPatient.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(addPatient.fulfilled, (state, action) => {
            if(action.payload.data === 'okay'){
                state.status = "success"
                // Change the page 
                window.location.replace("/patients-list")
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(addPatient.rejected, (state, action) => {
            state.status = 'error'
        })
    },
  })
  

export const statusSelector = state => state.addPatient.status
export const errorSelector = state => state.addPatient.error

export default addPatientSlice.reducer