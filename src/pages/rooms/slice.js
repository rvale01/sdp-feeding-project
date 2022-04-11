import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const getPatientsList = createAsyncThunk('roomss-list', async () => {
      const response = await axios.request("/rooms-list")
      return response
})

export const loginSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null,
        list: [],
        singleRoom: null
    },
    reducers: {
        getRoom:(state, action)=>{
            console.log("action?")
            const singleRoom = state.list.filter((value)=>value)
            console.log(singleRoom, 'single room')
        }
    },
    extraReducers: (builder) => {
        // rooms-list
        builder.addCase(getRoomsList.pending, (state, action) => {
            state.status = 'loading'
            console.log(action.response, 'response')
        })
        builder.addCase(getRoomsList.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.status = 'success'
                state.list = action.payload.data.rooms_list
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(getRoomsList.rejected, (state, action) => {
            state.status = 'error'
            console.log(action.response, 'response')
        })
    },
  })

export const { getRoom } = loginSlice.actions

export const statusSelector = state => state.rooms.status
export const errorSelector = state => state.rooms.error
export const roomsSelector = state => state.rooms.list
export const singlePatientSelector = state => state.rooms.singleRoom

export default loginSlice.reducer