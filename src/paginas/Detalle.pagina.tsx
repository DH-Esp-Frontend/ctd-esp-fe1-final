import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { IRootState,useSelector } from "../store/store";
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
    const dispatch = useDispatch();
    const {personajeDetalle,favoritosId} = useSelector((state: IRootState)  => state.personajes)
    const esFavorito = personajeDetalle && favoritosId.includes(personajeDetalle.id);

    const handleFavorito = () => {
        !esFavorito ? dispatch({type: 'AGREGAR_FAVORITO', personaje: personajeDetalle}) : dispatch({type: 'ELIMINAR_FAVORITO', personajeDetalle: personajeDetalle});
    }
    if (personajeDetalle === null) return <p className="error-texto">No hay un personaje Seleccionado </p>
    return <div className="container">
                <h3>{personajeDetalle.name}</h3>
                <div className={"detalle"}>
                    <div className={"detalle-header"}>
                        <img src={personajeDetalle.image} alt="Rick Sanchez"/>
                        <div className={"detalle-header-texto"}>
                            <p>{personajeDetalle.name}</p>
                            <p>Planeta: {personajeDetalle.origin.name}</p>
                            <p>Genero: {personajeDetalle.gender}</p>
                        </div>
                        <BotonFavorito esFavorito={esFavorito} onClick={handleFavorito} />
                    </div>
                </div>
                <h4>Lista de episodios donde apareció el personaje</h4>
                <div className={"episodios-grilla"}>
                    <TarjetaEpisodio />
                    <TarjetaEpisodio />
                    <TarjetaEpisodio />
                </div>
            </div>
}

export default PaginaDetalle