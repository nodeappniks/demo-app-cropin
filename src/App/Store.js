import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../Components/Auth/AuthSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})