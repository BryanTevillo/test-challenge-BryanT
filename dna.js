const dna = (word) => {
  let resultado = "";
  word.split("").map((value) => {
    value === "A" || value === "C" || value === "T" || value === "G"
      ? (resultado += value)
      : "";
  });

  return resultado;
};

//console.log(dna2("CTAGGGTAcaFGHLMT")); //CTAGGGTAGT

module.exports = dna;
