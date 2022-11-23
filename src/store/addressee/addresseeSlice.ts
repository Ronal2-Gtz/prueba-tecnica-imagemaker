import { createSlice } from '@reduxjs/toolkit'
import { AddresseeResponse } from '../../services/addresseeService'

type InitialState = {
    addresseeList: AddresseeResponse
    addresseeFilter: AddresseeResponse
}

const initialState: InitialState = {
    addresseeList: [],
    addresseeFilter: []
}

export const addresseeSlice = createSlice({
    name: "addressee",
    initialState,
    reducers: {
        addAddresseeList: (state, { payload }) => {
            state.addresseeList = [...payload]
        },
        deleteAddressee: (state, { payload }) => {
            state.addresseeList = state.addresseeList.filter(addressee => addressee.id !== payload)
        },
        filterAddressee: (state, { payload }) => {
            state.addresseeFilter = state.addresseeList.filter(addressee => addressee.name.toLocaleLowerCase() !== (payload as string).toLocaleLowerCase())
        },
        allAddresseeList: (state) => {
            state.addresseeFilter = state.addresseeList
        },


    }
})

export const { addAddresseeList, deleteAddressee, filterAddressee, allAddresseeList} = addresseeSlice.actions