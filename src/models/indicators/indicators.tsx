export interface IndicatorModel {
  description: string;
  content: string | number;
  render(): JSX.Element;
}

export interface IndicatorParams {
  description: string;
  content: string | number;
}
