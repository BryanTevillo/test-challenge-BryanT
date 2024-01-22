const fizzBuzz = require("../fizzBuzz");

describe("Se realizan pruebas unitarias al programa fizzBuzz", () => {
  test("deberia devolver Fizz cuando se ingrese 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  test("deberia devolver Buzz cuando se ingrese 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("deberia devolver FizzBuzz cuando se ingrese 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("deberia devolver el mismo numero que se envia  cuando se ingrese 4", () => {
    expect(fizzBuzz(4)).toBe(4);
  });

  test("deberia devolver 1  cuando se ingrese vacio ()", () => {
    expect(fizzBuzz()).toBe(1);
  });
});
