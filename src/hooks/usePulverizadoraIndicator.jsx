import { useState } from 'react';

/**Calcula el valor a mostrar de los indicadores relacionados con una pulverizadora, */

export function usePulverizadoraIndicator(valor) {
  const [value, setValue] = useState(0);

  const calcularPorcentaje = () => {
    const porcentaje = (valor) * 100;
    return porcentaje;
  };

  return {
    value,
    setValue,
    calcularPorcentaje,
  };
}
