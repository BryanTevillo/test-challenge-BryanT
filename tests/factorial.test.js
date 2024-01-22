const factorial = require("../factorial");

describe("Pruebas al metodo factorial", () => {
  test("Factorial de 5 es igual a 120", () => {
    expect(factorial(5)).toBe(120);
  });
});
