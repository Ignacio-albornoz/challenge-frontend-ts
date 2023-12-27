import "./styles.css"

/**Componente que renderiza la informacion de una maquina. 
 * 
 * Recibe por parametros un titulo y un objeto data, el cual mapea y muestra en un estilo de tabla
 */

export function InformationMachine({title, data}){

    return(
        <>
            <div className="information-header">
                <div className="information-title">
                    <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
                </div>
            </div>
            <ul className="information-content">
                {Object.entries(data).map(([key, value]) => (
                    <li key={key} className="information-li">
                        <h5 className="information-value" >{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                        <h5 className="information-value" >{value}</h5>
                    </li>
                ))}
                
            </ul>
        </>                                               
    )
}