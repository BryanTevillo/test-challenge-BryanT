const calculator = require("../calculator");

describe("Pruebas al programa calculator", () => {
  test("adds a + b  se ingresa 1,2 resultado 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test("substracts a - b se ingresa 10,5 resultado 5", () => {
    expect(calculator.substract(10, 5)).toBe(5);
  });

  test("multiplies a * b", () => {
    //
  });

  test("divides a / b", () => {
    // Consider decimals
  });

  test("Raises to power a ^ b", () => {
    //
  });
});
