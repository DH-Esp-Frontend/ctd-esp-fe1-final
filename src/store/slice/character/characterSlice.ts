import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Icharacter, characterState } from "../../../interfaces/interfaces";
import { GET_CHARACTERS } from "./thunksCharacter";

const inicialState: characterState = {
  dataCharacter: [],
  loading: true,
  Error: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState: inicialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GET_CHARACTERS.pending, (state) => {
      state.loading = true;
    })

    builder.addCase(GET_CHARACTERS.fulfilled, (state, action) => {
      state.dataCharacter = action.payload;
      state.loading = false;
    })

    builder.addCase(GET_CHARACTERS.rejected, (state, action) => {
      state.loading = false;
      state.Error  = action.error.message ?? 'Se ha presentado un error en la petición'
    })
  },

});

const charactersReducer = characterSlice.reducer;
export default charactersReducer;
