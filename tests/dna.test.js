const dna = require("../dna");

describe("Pruebas del programa dna", () => {
  test("DNA parammetro vacio retorna una cadena vacia ", () => {
    expect(dna("")).toBe("");
  });

  test("DNA parammetro CTAGGGTAcaFGHLMT retorna una cadena CTAGGGTAGT ", () => {
    expect(dna("CTAGGGTAcaFGHLMT")).toBe("CTAGGGTAGT");
  });
});
