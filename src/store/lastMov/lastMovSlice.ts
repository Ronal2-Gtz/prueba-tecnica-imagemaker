import { LastMovResponse } from "../../services/lastMovService"
import { createSlice } from '@reduxjs/toolkit';


type InitialState = {
    lastMovList:LastMovResponse 
}

const initialState: InitialState = {
    lastMovList: []
}

export const lastMovSlice = createSlice({
    name: 'lastMov', 
    initialState,
    reducers: {
        addLastMovList: (state, {payload}) => {
            state.lastMovList = [...payload]
        }
    }
})

export const {addLastMovList} = lastMovSlice.actions