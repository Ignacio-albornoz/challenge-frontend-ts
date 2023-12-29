import { renderHook } from "@testing-library/react-hooks";
import useLossPercentage from "./useComplementPercentage";

describe("useLossPercentage", () => {
  it("should calculate the loss percentage correctly", () => {
    const { result } = renderHook(() => useLossPercentage(0.5));
    expect(result.current).toBe(50); // Expected loss percentage for value 0.5 is 50
  });

  it("should handle value of 0 correctly", () => {
    const { result } = renderHook(() => useLossPercentage(0));
    expect(result.current).toBe(100); // Expected loss percentage for value 0 is 100
  });

  it("should handle value of 1 correctly", () => {
    const { result } = renderHook(() => useLossPercentage(1));
    expect(result.current).toBe(0); // Expected loss percentage for value 1 is 0
  });

  // Add more test cases as needed
});
