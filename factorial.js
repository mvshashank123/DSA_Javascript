const findFactorial = (num) => {
  let fact = 1;

  while (num > 0) {
    fact = fact * num;
    num--;
  }

  return fact;
};

const factorial = (num) => {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};
