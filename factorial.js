const factorial = (num = 1) => {
  return num === 0 ? 1 : factorial(num - 1) * num;
};

//console.log(factorial(5));

module.exports = factorial;
