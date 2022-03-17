import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './pages/login/slice'

export const store = configureStore({
  reducer: {
    login: loginSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
    }),
})