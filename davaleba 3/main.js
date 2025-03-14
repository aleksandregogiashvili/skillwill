const arr = (num1, num2, ...rest) => {
  const sum = num1 + num2;
  let result = 1;
  for (let num of rest) {
    result *= num;
  }
  return [sum, result]
}
