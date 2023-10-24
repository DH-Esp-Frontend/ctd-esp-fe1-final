import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { IEpisodio } from "../componentes/episodios/tarjeta-episodio.componente";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const episodio: IEpisodio = {
     nombre: 'Juan',
     numeroDeEpisodio: '1l', 
     fechaDeLanzamiento: new Date()
    }

    return <div className="container">
        <h3>Rick Sanchez</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
                <div className={"detalle-header-texto"}>

                    <p>Rick Sanchez</p>
                    <p>Planeta: Earth</p>
                    <p>Genero: Male</p>
                </div>
                {/* <BotonFavorito esFavorito={false} /> */}
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento}/>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento}/>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento}/>
        </div>
    </div>
}

export default PaginaDetalle