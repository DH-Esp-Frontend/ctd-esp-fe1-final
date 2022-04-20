// La interfaz Personaje es usado para almacenar los datos de un personaje puntual, obtenida luego de consultar la API.

interface Personaje {
    id: number;
    name: string;
    image: string;
    // species: string;
    // episode: string[];
    // status: string;
    // origin: {
    //     name: string;
    //     url: string
    // };
    // gender: string;
}

export interface PersonajeDetalle extends Personaje {
    species: string;
    episode: string[];
    status: string;
    origin: {
        name: string;
        url: string
    };
    gender: string;
}

export default Personaje;