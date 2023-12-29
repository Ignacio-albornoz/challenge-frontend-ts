import { useState, useEffect } from "react";

export const useComplementPercentage = (value: number) => {
  const [lossPercentage, setLossPercentage] = useState<number>(0);

  useEffect(() => {
    const calculatedPercentage = (1 - value) * 100;
    setLossPercentage(calculatedPercentage);
  }, [value]);

  return lossPercentage;
};
