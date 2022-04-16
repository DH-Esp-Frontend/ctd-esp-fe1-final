import Personaje from "../types/personaje.type";

export const buscarPersonajesAPI = async (name?: string): Promise<Personaje[]> => {
    let params = "?";
    if (name) {
        params += `name=${name}`;
    }
    return fetch(`https://rickandmortyapi.com/api/character${params}`)
        .then(response => response.json())
        .then(data => data.results);
};
