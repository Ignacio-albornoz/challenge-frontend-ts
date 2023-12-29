import { useState } from 'react';

/*Calcula el porcentaje de calidad, segun indica el enunciado*/

export function useCalidad(valor: number) {
  const [calidad, setCalidad] = useState(valor);
  
  const calcularPorcentaje = () => {
    let porcentaje;
    
    if (calidad === 0.00) {
      porcentaje = 100;
      return porcentaje;
    } 
    
    if (calidad === 1.00) {
      porcentaje = 0;
      return porcentaje;
    } 
    
    if(calidad >= 0.001 && calidad < 0.99){

      porcentaje = (1.000 - valor) * 100;
      console.log(porcentaje);
      return porcentaje;
    }

    return calidad;
  };

  return {
    calidad,
    setCalidad,
    calcularPorcentaje,
  };
}
