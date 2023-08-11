import { configureStore } from '@reduxjs/toolkit'
import authReudcer from './slice/auth'

export const store = configureStore({
  reducer: {
    auth: authReudcer
  },
})
