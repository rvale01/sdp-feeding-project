import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const getRoomsList = createAsyncThunk('rooms-list', async () => {
      const response = await axios.request("/rooms-list")
      return response
})

export const roomsSlice = createSlice({
    name: 'counter',
    initialState:{
        status: "idle",
        error: null,
        list: [],
        singleRoom: null
    },
    extraReducers: (builder) => {
        // rooms-list
        builder.addCase(getRoomsList.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getRoomsList.fulfilled, (state, action) => {
            if(action.payload.data !== 'Not found'){
                state.status = 'success'
                state.list = action.payload.data.rooms
            }else{
                state.status = 'error'
            }
        })
        builder.addCase(getRoomsList.rejected, (state, action) => {
            state.status = 'error'
        })
    },
  })

export const statusSelector = state => state.rooms.status
export const errorSelector = state => state.rooms.error
export const roomsSelector = state => state.rooms.list

export default roomsSlice.reducer