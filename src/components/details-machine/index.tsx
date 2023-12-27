import { MACHINE_TITLE_ACTUALIZACION, MACHINE_TITLE_CLASE, MACHINE_TITLE_EMPRESA, MACHINE_TITLE_ESTADO } from "../../environment/machineTitles";
import { ListOfIndicators } from "../list-of-indicators";
import { MovementIndicator } from "../movement-indicator/movementIndicator";
import "./styles.css"

/**Componente que muestra informacion sobre una maquina, que recibe por parametros*/

export function DetailsMachine({ machine }) {

    //Se formatea el string last_update en fecha con formato local
    const date = new Date(machine.last_update);
    const formattedDate = date.toLocaleString('es-AR');

    return (
        <div className="details-machine-content">
            <ListOfIndicators className="details-machine-indicators" indicators={machine.data.indicadores} />
            <div className="details-machine-wrap">
                <h4 className="details-machine-title details-company-title">{MACHINE_TITLE_EMPRESA}</h4>
                <h5 className="details-machine-value details-company-value">{machine.company}</h5>
            </div>
            <div className="details-wrap">
                <h4 className="details-machine-title class-title">{MACHINE_TITLE_CLASE}</h4>
                <h5 className="details-machine-value class-value">{machine.class}</h5>
            </div>
            <div className="details-machine-wrap">
                <h4 className="details-machine-title state-title">{MACHINE_TITLE_ESTADO}</h4>
                <div className="state-wrap">
                    <MovementIndicator MachinePage moving={machine.moving} />
                    {machine.moving ? <h5 className="details-machine-value moving-value">En movimiento</h5> : <h5 className="details-machine-value moving-value">Detenido</h5>}
                </div>
            </div>
            <div className="details-machine-wrap">
                <h4 className="details-machine-title last_update-title">{MACHINE_TITLE_ACTUALIZACION}</h4>
                <time dateTime={date} className="details-machine-value last_update-value">{formattedDate}</time>

            </div>
        </div>
    )
}