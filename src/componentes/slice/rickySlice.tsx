import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface Personaje{
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
    name: string,
    url: string
    },
    location: {
    name: string,
    url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
    }

    interface initialType{
        personajes: Personaje[]
        loading: boolean
        busqueda: string
        favoritos:Personaje[]
    }

    

export const fetchCharacter= createAsyncThunk(
    'personajes/list',
      async (page: number) =>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&limit=20`)
        const parseRes = await response.json()

      return parseRes.results
    }
  )

  export const getCharacterByName= createAsyncThunk(
    'personajes/byName',
      async (name: string) =>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes = await response.json()

      return parseRes.results
    }
  )

  const initialState: initialType = {
    personajes: [],
    loading: false,
    busqueda:"",
    favoritos:[]
  } 


  const characterSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
      busqueda:(state, action)=>{
        state.busqueda= action.payload
      },
      agregaFavorito:(state, action)=>{
        if(!state.favoritos.find(item => item.id === action.payload.id)){
          state.favoritos.push(action.payload)
        }else{
          state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
        }
          
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCharacter.pending, (state) => {
            state.loading= true
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading= false
        state.personajes= action.payload
      })
      .addCase(getCharacterByName.fulfilled, (state, action) => {
        state.loading=false
        state.personajes=action.payload
      }
        )
    },
  })

  export default characterSlice.reducer
  
  export const {busqueda, agregaFavorito} = characterSlice.actions