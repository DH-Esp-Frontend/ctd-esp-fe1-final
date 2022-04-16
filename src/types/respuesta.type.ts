import Personaje from "./personaje.type";

// Respuesta es usado para almacenar metadata de la respuesta de la API.
// Al guardar esta informacion, se puede lograr una experiencia de usuario mas agradable, al hacer requests que simulen un scrolling anticipadamente.
interface Respuesta {
    personajes: Personaje[];
    siguientePagina: string;
}

export default Respuesta;