import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './pages/login/slice'
import patientSlice from './pages/patientList/slice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    patients: patientSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
    }),
})