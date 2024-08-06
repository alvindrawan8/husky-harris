import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum } from "./basic";

describe("sumAndPlusTen", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    // AAA Pattern
    // Arrange - Set up the test
    const a = 5;
    const b = 10;

    // Act - Execute the test
    const result = sumAndPlusTen(a, b);

    // Assert - Check the result
    expect(result).toBe(25);
  });

  it("should be NaN if any of the parameters is not provided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen();

    expect(result).toBe(NaN);
  });
});

describe("maxNum", () => {
  it("haha", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("hihi", () => {
    expect(maxNum(50, 1)).toBe(50);
  });

  it("hehe", () => {
    expect(maxNum(5, 5)).toBe(5);
  });

  it("hoho", () => {
    expect(() => maxNum(5, "10")).toThrow(
      "All of the arguments must be a number"
    );
  });
});

/*
describe("factorial", () => {
  it("should return 1 when the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 when the input is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 3628800 when the input is 10", () => {
    expect(factorial(10)).toBe(3_628_800);
  });

  it("should throw error if the input is negative number", () => {
    expect(() => factorial(-10)).toThrowError(
      "Number must be a positive integer!"
    );
  });
});
*/
