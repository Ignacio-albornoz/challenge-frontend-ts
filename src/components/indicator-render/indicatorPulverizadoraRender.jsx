import { usePulverizadoraIndicator } from "../../hooks/usePulverizadoraIndicator";
import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";

/*Se encarga de renderizar los indicadores que pertenecen a una pulverizadora, ademas de calcular el porcentaje y asignarle el estilo*/

export const IndicatorPulverizadoraRender = ({content, description}) => {

    const { calcularPorcentaje } = usePulverizadoraIndicator(parseFloat(content));

    const breakpointColor = indicatorPulverizadoraBreakpointsColors(content);

    const porcentaje = calcularPorcentaje();

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {parseInt(porcentaje)} %
                </h2>
            </div>
        </>
    )
}