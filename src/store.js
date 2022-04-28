import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './pages/users/slice'
import loginSlice from './pages/login/slice'
import patientSlice from './pages/patientList/slice'
import roomsSlice from './pages/rooms/slice'
import uploadSlice from './pages/uploadData/slice'
import patientsDataSlice from './pages/home/slice'
import addPatientSlice from './pages/addPatient/slice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    patients: patientSlice,
    rooms: roomsSlice,
    users: usersSlice,
    upload: uploadSlice,
    patientsData: patientsDataSlice,
    addPatient: addPatientSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
    }),
})