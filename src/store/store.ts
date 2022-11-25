import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { addresseeSlice } from './addressee/addresseeSlice'
import { lastMovSlice } from './lastMov/lastMovSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		addresseeList: addresseeSlice.reducer,
		lastMovList: lastMovSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
