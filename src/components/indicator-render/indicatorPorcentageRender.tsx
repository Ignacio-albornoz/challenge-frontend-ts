import React from "react";
import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";
import { useComplementPercentage } from "../../hooks/indicators/useComplementPercentage";

//TODO: interface props
interface IndicatorCalidadRenderProps {
  content: number;
  description: string;
}

export const indicatorPorcentageRender: React.FC<
  IndicatorCalidadRenderProps
> = ({ content, description }) => {
  const breakpointColor = indicatorPulverizadoraBreakpointsColors(content);

  return (
    <>
      <div className={`indicator-container ${breakpointColor}`}>
        <h5 className="indicator-description indicator-text">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h5>
        <h2 className="indicator-content indicator-text">
          {parseInt(useComplementPercentage(content).toString())} %
        </h2>
      </div>
    </>
  );
};
