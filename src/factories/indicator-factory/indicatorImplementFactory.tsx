import { CalidadIndicatorFactory } from "./indicatorFactory";
import { CultivoIndicatorFactory } from "./indicatorFactory";
import { HumedadGranoIndicatorFactory } from "./indicatorFactory";
import { IndicatorParams } from "../../models/indicators/indicators";

import {
  INDICATOR_TITLE_CALIDAD,
  INDICATOR_TITLE_CULTIVO,
  INDICATOR_TITLE_DERIVA,
  INDICATOR_TITLE_EVAPORACION,
  INDICATOR_TITLE_HUMEDAD_GRANO,
  INDICATOR_TITLE_RINDE_HUMEDO,
  INDICATOR_TITLE_RINDE_SECO,
  INDICATOR_TITLE_TAPONAMIENTO,
  LABELS,
} from "../../environment/indicatorsTitles";

export function indicatorCreateFactory({
  description,
  content,
}: IndicatorParams) {
  const TITLE_CALIDAD = INDICATOR_TITLE_CALIDAD;
  const TITLE_TAPONAMIENTO = INDICATOR_TITLE_TAPONAMIENTO;
  const TITLE_DERIVA = INDICATOR_TITLE_DERIVA;
  const TITLE_EVAPORACION = INDICATOR_TITLE_EVAPORACION;
  const TITLE_HUMEDAD_GRANO = INDICATOR_TITLE_HUMEDAD_GRANO;
  const TITLE_RINDE_HUMEDO = INDICATOR_TITLE_RINDE_HUMEDO;
  const TITLE_RINDE_SECO = INDICATOR_TITLE_RINDE_SECO;
  const TITLE_CULTIVO = INDICATOR_TITLE_CULTIVO;

  if (description === TITLE_CALIDAD && typeof content === "number") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CalidadIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_TAPONAMIENTO && typeof content === "number") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CalidadIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_DERIVA && typeof content === "number") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CalidadIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_EVAPORACION && typeof content === "number") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CalidadIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (LABELS.hasOwnProperty(description) && typeof content === "number") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CalidadIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_CULTIVO && typeof content === "string") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CultivoIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_RINDE_HUMEDO && typeof content === "string") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CultivoIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_RINDE_SECO && typeof content === "string") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new CultivoIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  if (description === TITLE_HUMEDAD_GRANO && typeof content === "string") {
    const label = LABELS[description as keyof typeof LABELS];

    if (label) {
      description = label;
    }

    return new HumedadGranoIndicatorFactory().makeIndicator({
      description,
      content,
    });
  }

  return null;
}
