import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const getPatientsList = createAsyncThunk('patients-list', async () => {
      const response = await axios.request("/patients-list")
      return response
})

export const loginSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null,
        list: [],
        singlePatient: null
    },
    reducers: {
        getPatient:(state, action)=>{
            console.log("action?")
            const singlePatient = state.list.filter((value)=>value)
            console.log(singlePatient, 'single person')
        }
    },
    extraReducers: (builder) => {
        // patients-list
        builder.addCase(getPatientsList.pending, (state, action) => {
            state.status = 'loading'
            console.log(action.response, 'response')
        })
        builder.addCase(getPatientsList.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.status = 'success'
                state.list = action.payload.data.patients_list
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(getPatientsList.rejected, (state, action) => {
            state.status = 'error'
            console.log(action.response, 'response')
        })
    },
  })

export const { getPatient } = loginSlice.actions

export const statusSelector = state => state.patients.status
export const errorSelector = state => state.patients.error
export const patientsSelector = state => state.patients.list
export const singlePatientSelector = state => state.patients.singlePatient

export default loginSlice.reducer