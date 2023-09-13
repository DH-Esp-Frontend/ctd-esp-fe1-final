
import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

export type paginationSlice =  {
  value : number,
}

const initialState : paginationSlice ={
    value:0
}

export const paginationSlice = createSlice({
    name : 'page',
    initialState: initialState,
    reducers : {
        INCREMENT_PAGE : (state) => {
            state.value += 1;
        },
        DECREMENT_PAGE : (state) => {
            state.value -= 1;
        },
             
    }
});

const paginationReducer = paginationSlice.reducer;

export const {INCREMENT_PAGE, DECREMENT_PAGE} = paginationSlice.actions;

export default paginationReducer;