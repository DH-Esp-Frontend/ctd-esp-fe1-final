import './tarjeta-episodio.css';
import { getEpisode } from '../../services/capitulo.services';
import { useQuery } from 'react-query';
import { FC } from 'react';


/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */

interface TarjetaEpisodioProps {
    episodio: string
}

const TarjetaEpisodio: FC<TarjetaEpisodioProps>= ({episodio}:TarjetaEpisodioProps) => {

    const {data, isLoading, error} = useQuery(['episode',episodio], () => getEpisode(episodio));
    
    if (error) return <div className="tarjeta-episodio"><h4>Error Buscando informacion</h4></div> 
    return <div className="tarjeta-episodio">
            <h4>{!isLoading ? data.name : 'Cargando...' }</h4>
            <div>
                <span>{!isLoading && data.episode}</span>
                <span>Lanzado el: {!isLoading && data.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;