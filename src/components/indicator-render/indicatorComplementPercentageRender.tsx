import { usePercentage } from "../../hooks/indicators/usePercentage";
import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";

/*Se encarga de renderizar los indicadores que pertenecen a una pulverizadora, ademas de calcular el porcentaje y asignarle el estilo*/

interface IndicatorPulverizadoraRenderProps {
  content: number;
  description: string;
}

export const indicatorComplementPercentageRender: React.FC<
  IndicatorPulverizadoraRenderProps
> = ({ content, description }) => {
  const breakpointColor = indicatorPulverizadoraBreakpointsColors(content);

  return (
    <>
      <div className={`indicator-container ${breakpointColor}`}>
        <h5 className="indicator-description indicator-text">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h5>
        <h2 className="indicator-content indicator-text">
          {parseInt(usePercentage(content).toString())} %
        </h2>
      </div>
    </>
  );
};
