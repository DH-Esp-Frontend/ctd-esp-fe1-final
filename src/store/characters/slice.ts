import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_CHARACTERS, GET_CHARACTERS_FILTER, } from './thunk';
import { IAllCharacters, ICharacter} from '../../interfaces/character.interface';



export type CharacterState = {
urlBase: string
allCharacters: ICharacter[],
isLoading: boolean,
isError: string | null,
nextPage: string,
prevPage: string,
esfavorito: boolean
listFavoritos: ICharacter[]

}


const initialState : CharacterState= {
    urlBase: 'https://rickandmortyapi.com/api/character/',
    allCharacters: [],
    isLoading: true,
    isError :  null,
    prevPage: '',
    nextPage: '',
    esfavorito: false,
    listFavoritos: []
}


export const charactersSlice = createSlice({
    name : 'character',
    initialState: initialState,
    reducers : {
        ADD_FAVORITOS : (state, action : PayloadAction<number>) => {
            const findCharacter = state.allCharacters.find(character => character.id === action.payload);
            if(findCharacter){
                findCharacter.esFavorito = !state.esfavorito;
                state.listFavoritos.push(findCharacter)
            }
        },
      
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_CHARACTERS.pending, ( state   ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<IAllCharacters>) => {
            state.allCharacters = action.payload.allCharacters;
            state.prevPage = action.payload.prevPage
            state.nextPage = action.payload.nextPage
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ?? 'Ha ocurrido un error'
            
            
        })
        builder.addCase(GET_CHARACTERS_FILTER.pending, ( state   ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS_FILTER.fulfilled, (state, action : PayloadAction<IAllCharacters>) => {
            state.allCharacters = action.payload.allCharacters;
            state.prevPage = action.payload.prevPage
            state.nextPage = action.payload.nextPage
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS_FILTER.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ?? 'Ha ocurrido un error'
            
            
        })
},

});


const characterReducer = charactersSlice.reducer;
export const {ADD_FAVORITOS} = charactersSlice.actions;
export default characterReducer;
