import { createSlice } from '@reduxjs/toolkit';
import { characterState } from '../../../interfaces/interfaces';



const inicialState: characterState = 
{
  dataCharacter:[],
  loading:true,
  Error:null
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: inicialState,

  reducers: {
   
  },
});

export const { } = characterSlice.actions;