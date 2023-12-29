import { useState, useEffect } from 'react';

export function usePorcentajeRendimiento(valor: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    calculatePercentage();
  }, [valor]);

  const calculatePercentage = () => {
    if (typeof valor === 'number' && !isNaN(valor)) {
      const porcentaje = valor * 100;
      setValue(Math.round(porcentaje));
    }
  };

  const updateValue = (nuevoValor: number) => {
    if (typeof nuevoValor === 'number' && !isNaN(nuevoValor)) {
      setValue(Math.round(nuevoValor));
    }
  };

  return {
    value,
    updateValue,
  };
}
