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
        /**
        * Agrega a favoritos un nuevo personaje agregándolo al estado de la propiedad listfavoritos[]
        * @author 'Ivana Kowalczuk'
        * @param { WritableDraft<CharacterState> } state 
        * @param {PayloadAction<ICharacter>} action 
        * @return {Object} retorna el objeto, personaje que se agrega al array de personajes favoritos
        */
             ADD_FAVORITOS: (state, action: PayloadAction<ICharacter>) => {      
               const personaje = action.payload;
               const esFavorito = state.listFavoritos.find(
                 (fav) => fav.id === personaje.id
               );
               if (esFavorito) {
                 esFavorito.esFavorito = false;
                 state.listFavoritos = state.listFavoritos.filter(
                   (item) => item.id !== esFavorito.id
                 );
               } else {
                 personaje.esFavorito = true;
                 state.listFavoritos.push(personaje);
               }      
             },
             
                    
       /**
        * Limpia el estado del array de favoritos para dejarlo como array vacío
        * @author 'Ivana Kowalczuk'
        * @param {WritableDraft<CharacterState>} state
        * @return {Array} retorna un array vacío para el estado de listFavoritos[]
        */
               CLEAN_ALL_FAVORITOS:  (state) => {
                   state.listFavoritos = []
               }
             
           },
           extraReducers : (builder) =>{
       
               /**
        * Usa el método GET_CHARACTES para guardar en el estado del array allCharacters además, g
        * uarda los estados de la página anterior y la siguiente
        * @author 'Ivana Kowalczuk'
        * @param { WritableDraft<CharacterState>} state 
        * @param {PayloadAction<IAllCharacters>} action
        * @return {Array} retorna un array de personajes
        */     
       
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
       
           /**
        * Usa el método GET_CHARACTES_FILTER para filtrar por nombre. Necesita recibir el nombre buscado que se ingresa en el input.
        * @author 'Ivana Kowalczuk'
        * @param {WritableDraft<CharacterState>} state 
        * @return {Array} retorna un array de personajes filtrados por nombre de tipo IAllCharacters
        */
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
