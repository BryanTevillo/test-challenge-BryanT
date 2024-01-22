const dna = require("../dna");

describe("Pruebas del programa dna", () => {
  test("DNA parammetro vacio retorna una cadena vacia ", () => {
    expect(dna("")).toStrictEqual("");
  });

  test("DNA parammetro CTAGGGTAcaFGHLMT retorna una cadena CTAGGGTAGT ", () => {
    expect(dna("CTAGGGTAcaFGHLMT")).toStrictEqual("CTAGGGTAGT");
  });
});
