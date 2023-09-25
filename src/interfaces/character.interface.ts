export interface ICharacter {
    id:number;
    name: string;
    image: string;
    esFavorito: boolean;
   
}
export interface IAllCharacters{
    allCharacters:ICharacter[]
    nextPage: string;
    prevPage: string;
}