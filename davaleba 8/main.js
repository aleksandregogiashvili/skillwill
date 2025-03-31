function expo(base, exponent, callback) {
  if (exponent === 0) {
      return callback(1);
  }
  return callback(base * expo(base, exponent - 1, (result) => result));
}

function callbackResult(result) {
  return result;
}

const result = expo(5, 3, callbackResult);
console.log(result); 