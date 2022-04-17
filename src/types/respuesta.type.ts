import Personaje from "./personaje.type";

// Respuesta es usado para almacenar metadata de la respuesta de la API.
// Al guardar esta informacion, se puede lograr una experiencia de usuario mas agradable, al hacer requests que simulen un scrolling anticipadamente.
export interface Respuesta {
    personajes: Personaje[];
    siguientePagina: string;
}

export interface RespuestaPersonaje {
    id: number;
    name: string;
    image: string;
    species: string;
    episode: string[];
    status: string;
    origin: {
        name: string;
        url: string
    };
    gender: string;
}

// export default Respuesta;
// export default RespuestaPersonaje;