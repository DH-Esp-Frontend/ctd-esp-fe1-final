import Respuesta from "../types/respuesta.type";

export const buscarPersonajesPorNombreAPI = async (name?: string): Promise<Respuesta> => {
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

export const buscarPersonajesPorPaginaAPI = async (pagina: string): Promise<Respuesta> => {
    return fetch(pagina)
        .then(response => response.json())
        .then(data => {
            return {
                personajes: data.results,
                siguientePagina: data.info.next || ""
            }
        });
};