import { IndicatorCalidadRender } from "../../components/indicator-render/IndicatorCalidadRender";
import { IndicatorCultivoRender } from "../../components/indicator-render/IndicatorCultivoRender";
import { IndicatorRindeHumedoSecoRender } from "../../components/indicator-render/indicatorRindeHumedoSecoRender";
import { IndicatorParams } from "../../models/indicators/indicators";
import { IndicatorModel } from "../../models/indicators/indicators";

// STEP 2
class IndicatorCalidad implements IndicatorModel {
  description: string;
  content: number;

  constructor(description: string, content: number) {
    this.description = description;
    this.content = content;
  }

  render(): JSX.Element {
    return (
      <IndicatorCalidadRender
        description={this.description}
        content={this.content}
      />
    );
  }
}

class IndicatorHumedadGrano implements IndicatorModel {
  description: string;
  content: string;

  constructor(description: string, content: string) {
    this.description = description;
    this.content = content;
  }

  render(): JSX.Element {
    return (
      <IndicatorRindeHumedoSecoRender
        description={this.description}
        content={this.content}
      />
    );
  }
}

class IndicatorCultivo implements IndicatorModel {
  description: string;
  content: string;

  constructor(description: string, content: string) {
    this.description = description;
    this.content = content;
  }

  render(): JSX.Element {
    return <IndicatorCultivoRender content={this.content} />;
  }
}

// STEP 3
interface IndicatorFactory {
  makeIndicator(indicatorParams: IndicatorParams): JSX.Element;
}

// STEP 4
export class CalidadIndicatorFactory implements IndicatorFactory {
  makeIndicator({
    description,
    content,
  }: {
    description: string;
    content: number;
  }): JSX.Element {
    return new IndicatorCalidad(description, content).render();
  }
}

export class CultivoIndicatorFactory implements IndicatorFactory {
  makeIndicator({
    description,
    content,
  }: {
    description: string;
    content: string;
  }): JSX.Element {
    return new IndicatorCultivo(description, content).render();
  }
}

export class HumedadGranoIndicatorFactory implements IndicatorFactory {
  makeIndicator({
    description,
    content,
  }: {
    description: string;
    content: string;
  }): JSX.Element {
    return new IndicatorHumedadGrano(description, content).render();
  }
}
