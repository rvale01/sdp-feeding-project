import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const patientsData = createAsyncThunk('patientsData', async () => {
      const response = await axios.request("/patients-data")
      return response
})

export const patientsDataSlice = createSlice({
    name: 'patientsData',
    initialState:{
        status: "idle",
        error: null,
        patientsData: null
    },
    extraReducers: (builder) => {
        // patientsData
        builder.addCase(patientsData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(patientsData.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.patientsData = action.payload
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(patientsData.rejected, (state, action) => {
            state.status = 'error'
        })
    },
  })
  
export const statusSelector = state => state.patientsData.status
export const errorSelector = state => state.patientsData.error
export const patientsDataSelector = state => state.patientsData.patientsData

export default patientsDataSlice.reducer