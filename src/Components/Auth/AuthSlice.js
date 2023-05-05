import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [],
    activeUser: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registration: (state, action) => {
            state.userData.push(action.payload)
        },
        setActiveUser: (state, action) => {
            state.activeUser.username = action.payload.username
        }
    },
})

export const selectUserDetails = (state) => state.auth.userData
export const selectActiveUser = (state) => state.auth.activeUser
export const { registration, setActiveUser } = authSlice.actions

export default authSlice.reducer