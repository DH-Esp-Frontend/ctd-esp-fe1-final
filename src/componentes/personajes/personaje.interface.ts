import { ICharacter } from "../../interfaces/character.interface";

export interface IFiltros{
    name: string | null,
    setName: (name: string | null  )=> void
    urlBase: string
  }

 
  
  export interface IGrillaPersonajes{
    initialCharacters: ICharacter[]
  }
