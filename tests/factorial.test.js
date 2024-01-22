const factorial = require("../factorial");

describe("Pruebas al programa factorial", () => {
  test("Factorial de 5 es igual a 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("Factorial de 1 es igual a 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("Factorial de 0 es igual a 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("Factorial parametro vacio ('') es igual a  1", () => {
    expect(factorial()).toBe(1);
  });
});
