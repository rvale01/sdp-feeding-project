import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

import axios from 'axios'

export const getPatientsList = createAsyncThunk('patients-list', async () => {
      const response = await axios.request("/patients-list")
      return response
})

export const setReferred = createAsyncThunk('set-referred', async () => {
    const id = window.location.pathname.replace("/patients-details/", "")
    const response = await axios.request("/set-referred", {params: {id}})
    return response
})

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        status: "idle",
        error: null,
        list: [],
        singlePatient: null,
        setReferredStatus: 'idle'
    },
    reducers: {
        getPatient:(state, action)=>{
            const id = window.location.pathname.replace("/patients-details/", "")
            current(state.list)
            state.singlePatient = state.list.filter(patient => patient.id === parseInt(id))[0];
        }
    },
    extraReducers: (builder) => {
        // patients-list
        builder.addCase(getPatientsList.pending, (state, action) => {
            state.status = 'loading'
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
        })

        builder.addCase(setReferred.pending, (state, action) => {
            state.setReferredStatus = 'loading'
        })
        builder.addCase(setReferred.fulfilled, (state, action) => {
            state.setReferredStatus = 'success'
            window.location.reload()
        })
        builder.addCase(setReferred.rejected, (state, action) => {
            state.setReferredStatus = 'error'
        })
    },
  })

export const { getPatient } = loginSlice.actions

export const statusSelector = state => state.patients.status
export const errorSelector = state => state.patients.error
export const patientsSelector = state => state.patients.list
export const singlePatientSelector = state => state.patients.singlePatient
export const setReferredStatusSelector = state => state.patients.setReferredStatus

export default loginSlice.reducer