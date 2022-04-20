import './tarjeta-episodio.css';
import { FC } from 'react';
import { IRootState, useSelector } from '../../store/store';


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
    const id = episodio.split('/').pop();
    const {episodios} = useSelector((state:IRootState) => state.episodios);
    
    // Encuentro el episodio en el store usando el id.
    const data = episodios?.find(episodio => episodio.id.toString() === id);
    
    // Retorno el template con la informacion del episodio.
    return <div className="tarjeta-episodio">
                <h4>{data?.name}</h4>
                <div>
                    <span>{data?.episode}</span>
                    <span>Lanzado el: {data?.air_date}</span>
                </div>
            </div>
}

export default TarjetaEpisodio;
