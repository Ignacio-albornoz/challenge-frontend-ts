import { renderHook } from "@testing-library/react-hooks";
import useYieldPercentage from "./usePercentage";

describe("useYieldPercentage", () => {
  for (let i = 0; i <= 1; i += 0.01) {
    test(`should return correct percentage for value ${i.toFixed(2)}`, () => {
      const { result } = renderHook(() => useYieldPercentage(i));
      expect(result.current).toBeCloseTo(i * 100, 2);
    });
  }

  test("should return 0 if value is less than or equal to 0", () => {
    const { result } = renderHook(() => useYieldPercentage(-0.01));
    expect(result.current).toBe(0);
  });

  test("should return 100 if value is greater than or equal to 1", () => {
    const { result } = renderHook(() => useYieldPercentage(1.01));
    expect(result.current).toBe(100);
  });
});
