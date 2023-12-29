import { useState, useEffect } from "react";

export const usePercentage = (value: number) => {
  const [percentage, setPercentage] = useState<number>(0);

  const calculatePercentage = (value: number) => {
    if (value >= 1) {
      setPercentage(100);
    } else if (value <= 0) {
      setPercentage(0);
    } else {
      const percentageValue = (value * 100).toFixed(2);
      setPercentage(parseFloat(percentageValue));
    }
  };

  useEffect(() => {
    calculatePercentage(value);
  }, [value]); // Dependencia de useEffect

  return percentage;
};
