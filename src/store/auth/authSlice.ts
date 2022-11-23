import { createSlice } from '@reduxjs/toolkit';

type UserAuth = {
    status: 'checking' | 'not-authenticated' | 'authenticated'
    id?: string
    user?: string
    isAuthenticated?: boolean
    errorMessage?: string
}

const initialState: UserAuth = {
    status: 'not-authenticated',
    id: undefined,
    user: undefined,
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.id = payload.id
            state.user = payload.user
            state.errorMessage = undefined

        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated'
            state.id = undefined
            state.user = undefined
            state.errorMessage = payload
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
})

export const { login, logout, checkingCredentials } = authSlice.actions