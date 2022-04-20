import { RespuestaEpisodio } from "../types/respuesta.type";

export const getEpisode = async (capitulo:string) : Promise<RespuestaEpisodio> => {    
    return await fetch(`https://rickandmortyapi.com/api/episode/${capitulo}`
    ).then((data) => data.json());
    
  };