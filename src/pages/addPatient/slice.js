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

export const statusSelector = state => state.upload.status
export const errorSelector = state => state.upload.error