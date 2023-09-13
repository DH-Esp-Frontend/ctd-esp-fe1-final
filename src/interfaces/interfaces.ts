export interface BotonFavoritoProps 
{
    esFavorito: boolean,
    onClick?: () => void

}

export interface Welcome {
    info:    infoApi;
    results: Icharacter[];
}

export interface infoApi {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Icharacter {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export interface characterState 
{
    dataCharacter: Icharacter[],
    loading: boolean,
    Error:string | null
}


export interface IPagination {
    page: number
  }
  