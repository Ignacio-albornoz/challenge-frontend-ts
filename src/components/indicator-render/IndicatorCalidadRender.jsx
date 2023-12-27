import React, {useEffect} from 'react';
import { useCalidad } from "../../hooks/useCalidad"

import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";

/*Se encarga de renderizar el indicador Calidad, de calcular el porcentaje y asignarle el estilo*/

export const IndicatorCalidadRender = ({content, description}) => {

    const { calidad, calcularPorcentaje } = useCalidad(content);

    const porcentaje = calcularPorcentaje();

    const breakpointColor = indicatorPulverizadoraBreakpointsColors(parseFloat(content));


    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {calidad ? parseInt(porcentaje) : '-'} %
                </h2>
            </div>
        </>
    )
}