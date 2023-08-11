import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    loaded: false,
    profile: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action) {
            const { profile } = action.payload

            state.profile = profile
            state.loggedIn = true
            state.loaded = true
        },

        loginGuest(state) {
            state.loggedIn = false
            state.loaded = true
        },

        logout(state) {
            state.loggedIn = true
            state.loaded = true
        },
    }
})

export const { loginGuest, loginUser, logout } = authSlice.actions

export default authSlice.reducer
