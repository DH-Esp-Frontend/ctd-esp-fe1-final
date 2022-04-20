import { RespuestaEpisodio } from "../types/respuesta.type";

export const getEpisode = async (capitulos:string) : Promise<RespuestaEpisodio[]> => {    
    return await fetch(`https://rickandmortyapi.com/api/episode/${capitulos}`
    ).then((data) => data.json());
  };