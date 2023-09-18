import {createAsyncThunk} from '@reduxjs/toolkit';
import { IAllCharacters, ICharacter } from '../../interfaces/character.interface'

export const GET_CHARACTERS = createAsyncThunk(
        'character/GET_CHARACTERS',
        async (urlBase: string): Promise<IAllCharacters> => {
                
                try {
                        const resp = await fetch(urlBase);
                        const data = await resp.json();
                        const resultsCharacters = {
                                allCharacters: data.results,
                                nextPage: data.info.next,
                                prevPage: data.info.prev
                        }
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }
                     
        }
      );
   
      export const GET_CHARACTERS_FILTER = createAsyncThunk(
        'character/GET_CHARACTERS_FILTER',
        async ({name}: {name: string | null | undefined}): Promise<IAllCharacters> => {
                
                try {
                        const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
                        const data = await resp.json();
                        const resultsCharacters: IAllCharacters = {
                        allCharacters: data.results,
                        nextPage: data.info.next,
                        prevPage: data.info.prev
                        }
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }
                     
        }
      );
   

export const GET_CHARACTER_ID = createAsyncThunk('character/GET_CHARACTERS_ID', async (id: number) : Promise<ICharacter>=> {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json();
        return data;
})