import './tarjeta-episodio.css';
import { getEpisode } from '../../services/capitulo.services';
import { useQuery } from 'react-query';
import { FC } from 'react';


interface TarjetaEpisodioProps {
    episodio: string
}


/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Recibe como props el string del episodio a mostrar y muestra la informacion del mismo en el formato del template.
 * 
 * @param {string} episodio url a la API del episodio a mostrar.
 * @returns un JSX element 
 */
const TarjetaEpisodio: FC<TarjetaEpisodioProps>= ({episodio}:TarjetaEpisodioProps) => {
    // Como los capitulos suelen repetirse entre personajes, aprovecho el cache de React Query para no volver a pedir la informacion.
    const {data, isLoading, error} = useQuery(['episode',episodio.split('/').pop()], () => getEpisode(episodio));
    
    // Si hay error, muestro un mensaje de error.
    if (error) return <div className="tarjeta-episodio"><h4>Error Buscando informacion</h4></div> 
    
    // Retorno el template con la informacion del episodio.
    return <div className="tarjeta-episodio">
                <h4>{!isLoading ? data.name : 'Cargando...' }</h4>
                <div>
                    <span>{!isLoading && data.episode}</span>
                    <span>Lanzado el: {!isLoading && data.air_date}</span>
                </div>
            </div>
}

export default TarjetaEpisodio;