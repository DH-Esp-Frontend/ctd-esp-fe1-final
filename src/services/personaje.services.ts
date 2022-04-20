import {RespuestaPersonajes, RespuestaPersonaje} from "../types/respuesta.type";

export const buscarPersonajesPorNombreAPI = async (name?: string): Promise<RespuestaPersonajes> => {
    let params = "?";
    if (name) {
        params += `name=${name}`;
    }
    return fetch(`https://rickandmortyapi.com/api/character${params}`)
        .then(response => response.json())
        .then(data => {
            return {
                personajes: data.results,
                siguientePagina: data.info.next || ""
            }
        });
};

export const buscarPersonajesPorPaginaAPI = async (pagina: string): Promise<RespuestaPersonajes> => {
    return fetch(pagina)
        .then(response => response.json())
        .then(data => {
            return {
                personajes: data.results,
                siguientePagina: data.info.next || ""
            }
        });
};

export const buscarPersonajePorIdAPI = async (id: number): Promise<RespuestaPersonaje> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            return {
                personaje: data
            }
        });
};