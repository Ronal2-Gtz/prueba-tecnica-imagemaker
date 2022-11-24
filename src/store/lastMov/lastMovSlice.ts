import { LastMovResponse } from "../../services/lastMovService"
import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

type InitialState = {
    lastMovList: LastMovResponse
    lastMovFilter: LastMovResponse
}

const initialState: InitialState = {
    lastMovList: [],
    lastMovFilter: []
}

export const lastMovSlice = createSlice({
    name: 'lastMov',
    initialState,
    reducers: {
        addLastMovList: (state, { payload }) => {
            state.lastMovList = [...payload]
        },
        filterLastMov: (state, { payload }) => {
            state.lastMovFilter = state.lastMovList.filter(
                (lastMov) => lastMov.description.toUpperCase().includes(payload.toUpperCase())
            )
        },
        filterByDate: (state, { payload }) => {
      
            state.lastMovFilter = state.lastMovFilter.filter(lastMov => dayjs(lastMov.date).isAfter(dayjs(payload.start)) && dayjs(lastMov.date).isBefore(dayjs(payload.end)) || dayjs(lastMov.date).isSame(dayjs(payload.end)))
        },
        copyLastMovList: (state) => {
            state.lastMovFilter = state.lastMovList
        }

    }
})

export const { addLastMovList, filterLastMov, copyLastMovList, filterByDate } = lastMovSlice.actions