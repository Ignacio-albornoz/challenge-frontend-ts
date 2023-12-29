import "./styles.css";

/* Components */
import { indicatorCreateFactory } from "../../factories/indicator-factory/indicatorImplementFactory";
import { IndicatorParams } from "../../models/indicators/indicators";

export const Indicator: React.FC<IndicatorParams> = ({
  description,
  content,
}) => indicatorCreateFactory({ description, content });
