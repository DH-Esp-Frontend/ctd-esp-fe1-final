import { createSlice } from '@reduxjs/toolkit';


const initialStateCaracter

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialStateCaracter,

  reducers: {
    increment: (state) => {
      state.character += 1;
    },

    decrement: (state) => {
      state.character -= 1;
    },

    incrementBy: (state, action) => {
    console.log(action) 
      state.character += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = characterSlice.actions;