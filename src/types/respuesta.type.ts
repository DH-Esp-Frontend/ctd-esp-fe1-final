import Episodio from "./episodio.type";
import Personaje, { PersonajeDetalle } from "./personaje.type";

// Respuesta es usado para almacenar metadata de la respuesta de la API.
// Al guardar esta informacion, se puede lograr una experiencia de usuario mas agradable, al hacer requests que simulen un scrolling anticipadamente.
export interface RespuestaPersonajes {
    personajes: Personaje[];
    siguientePagina: string;
}

export interface RespuestaPersonaje {
    personaje: PersonajeDetalle;
}

export interface RespuestaEpisodio {
    episodio: Episodio
}