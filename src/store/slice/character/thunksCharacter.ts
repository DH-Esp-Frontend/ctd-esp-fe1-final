import { createAsyncThunk } from "@reduxjs/toolkit";
import { Icharacter } from "../../../interfaces/interfaces";

export const GET_CHARACTERS = createAsyncThunk
(
    'character/GET_CHARACTERS',
    async ({data, parameter}: {data:number | string; parameter:string})=> 
    {
        try
        {
            const dataCharacter = await fetch(`https://rickandmortyapi.com/api/character/?${parameter}=${data}`);
            const dataResponseCharacter = await dataCharacter.json();
            const dataResulsCharacter = dataResponseCharacter.results;
            return dataResulsCharacter;
        }

        
        catch(error)
        {
            console.error("Error en la petición:", error);


        }


    }
);

export const GET_CHARACTER_BY_ID = createAsyncThunk('character/GET_CHARACTERS',async (id:number): Promise<Icharacter[]> => {
    const dataResulsCharacter = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const dataResponseCharacter = await dataResulsCharacter.json();
    return dataResponseCharacter;
    
})
