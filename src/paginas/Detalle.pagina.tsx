import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { IRootState,useSelector } from "../store/store";
import { FC } from "react";
import { agregarFavorito, eliminarFavorito } from "../actions/personaje.actions";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * Se modificó el componente para que se pueda acceder a los datos del personaje a traves de la URL.
 * La url sera del tipo: /detalle/:id, donde :id es el id del personaje.
 * 
 * Se hace uso de reactQuery para hacer la consulta al API de la informacion del personaje, evitando guardar en el store mucha información acerca de capítulos y personajes que solo será usada aquí.
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle: FC = () => {
    const dispatch = useDispatch();
    const {personajeDetalle, favoritosId, error} = useSelector((state: IRootState)  => state.personajes)
    const esFavorito = personajeDetalle && favoritosId.includes(personajeDetalle.id) ? true : false;

    // Defino la funcion que se ejecuta al hacer click en el boton de favorito.
    const handleFavorito = () => {
        !esFavorito ? dispatch(agregarFavorito(personajeDetalle)) : dispatch(eliminarFavorito(personajeDetalle));
    }
    

    // Retornos en caso de error y carga
    if (error) return <p className="error-texto">Error Buscando Personaje Seleccionado </p>
    if (!personajeDetalle) return <p className="error-texto">No hay personaje para mostrar</p>

    // Retorno del componente 
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
                    {
                        personajeDetalle.episode.map((e:string) => <TarjetaEpisodio episodio = {e} key={e}/>)
                    }
                </div>
            </div>
}

export default PaginaDetalle