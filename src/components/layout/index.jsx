import React, { useContext } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { SearchContext } from "../../context/search";

import './styles.css';

import URL_LOGO_ACRONEX from "../../assets/logo-acronex.png"
import URL_LOGO_UNIMAP from "../../assets/unimap_blanco.svg"
import URL_LOGO_SEARCH from "../../assets/search.png"
import URL_LOGO_LOGIN from "../../assets/user.png"

/**Componente, layout que se renderiza en toda la apliacion 
 * 
 * Permite navegar al home desde los iconos y realizar busquedas en la barra de busqueda
 * 
 * Barra de busqueda: Al ingresar texto actualiza el contexto de la pagina.
 *                    Al ingresar numeros, no actualiza el contexto.
 * 
 * Boton buscar: Si barra de busquedas tiene solo numeros, realiza un redireccionamieto a machines/id
 * 
*/


function Layout() {

    const navigate = useNavigate()

    //Se importa el contexto
    const { search, setSearch } = useContext(SearchContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        //Expresion regular que valida si el input es solo numeros
        if(search.match(/^\d+$/)){
            navigate(`/machine/${search}`)
            setSearch('')
        }
    }

    const handleChange = (event) => {
        const query = event.target.value;
        setSearch(query);
    }

    return(
    <>
        <header className="layout-container">
            <div className="icon-wrap">
                <NavLink to={"/"} className={"icon-wrap"}>
                    <img src={URL_LOGO_ACRONEX} alt="logo acronex" />
                    <img className="icon-unimap" src={URL_LOGO_UNIMAP} alt="unimap logo blanco" />
                </NavLink>
            </div>
            <form onSubmit={handleSubmit} className="form-search-bar" >
                <input 
                    name="query"
                    value={search}
                    onChange={handleChange} 
                    className="search-bar-input" 
                    type="text" 
                    placeholder="Buscar..." 
                />
                <button type="submit" className="search-bar-button" >
                    <img className="search-bar-icon"src={URL_LOGO_SEARCH} alt="logo de busqueda, para el input barra de busqueda" />
                </button>
            </form>

            <div className="login-button-wrap">
                <button className="login-button">
                    <img className="login-icon" src={URL_LOGO_LOGIN} alt="logo de usuario, para iniciar sesion" />
                </button>
            </div>
        </header>
    </>

    )
}

export { Layout };