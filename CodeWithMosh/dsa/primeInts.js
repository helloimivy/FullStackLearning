// 1.
// input: limit
// output: log each prime number from 1 to limit`

function showPrimes(limit) {
  for (let i = 2; i < limit; i++) if (checkFactors(i)) console.log(i);
}

function checkFactors(num) {
  for (let factor = 2; factor < num; factor++)
    if (num % factor === 0) return false;
  return true;
}

// showPrimes(20);
