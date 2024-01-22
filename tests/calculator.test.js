const { default: expect } = require("expect");
const calculator = require("../calculator");

describe("Pruebas al programa calculator", () => {
  test("adds a + b  se ingresa 1,2 resultado 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test("substracts a - b se ingresa 10,5 resultado 5", () => {
    expect(calculator.substract(10, 5)).toBe(5);
  });

  test("multiplies a * b se ingresa 10,5 resultado 50", () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });

  test("divides a / b se ingresa 10,5 resultado 2", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test("Raises to power a ^ b se ingresa 2,3 resultado 8", () => {
    expect(calculator.power(2, 3)).toBe(8);
  });
});
