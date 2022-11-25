import { createSlice } from '@reduxjs/toolkit'
import { AddresseeResponse } from '../../services/addresseeService'

type InitialState = {
	addresseeList: AddresseeResponse
	addresseeFilter: AddresseeResponse
}

const initialState: InitialState = {
	addresseeList: [],
	addresseeFilter: [],
}

export const addresseeSlice = createSlice({
	name: 'addressee',
	initialState,
	reducers: {
		addAddresseeList: (state, { payload }) => {
			state.addresseeList = [...payload]
		},
		removeAddressee: (state, { payload }) => {
			state.addresseeList = state.addresseeList.filter(
				(addressee) => addressee.id !== payload
			)
		},
		addAddresseeSlice: (state, { payload }) => {
			state.addresseeList.push(payload)
		},
		filterAddressee: (state, { payload }) => {
			state.addresseeFilter = state.addresseeList.filter((addressee) =>
				addressee.name.toUpperCase().includes(payload.toUpperCase())
			)
		},
		copyAddresseeList: (state) => {
			state.addresseeFilter = state.addresseeList
		},
	},
})

export const {
	addAddresseeList,
	removeAddressee,
	filterAddressee,
	copyAddresseeList,
	addAddresseeSlice,
} = addresseeSlice.actions
