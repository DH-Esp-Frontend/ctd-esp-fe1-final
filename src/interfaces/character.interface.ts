export interface ICharacter {
    id:number;
    name: string;
    image: string;
    esFavorito: boolean;
    pageNext: string;
    pagePrev: string;
    source: string;
}
export interface IAllCharacters{
    allCharacters:ICharacter[]
    nextPage: string;
    prevPage: string;
}