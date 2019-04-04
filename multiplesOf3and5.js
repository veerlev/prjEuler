/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/
function multiplesOf3and5(number) {
  number--;
  var m3 = Math.floor(number/3);
  var m5 = Math.floor(number/5);
  var m15 = Math.floor(number/15);
  return 0.5 * (3 * m3 * (m3 + 1) + 5 * m5 * (m5 + 1)
  - 15 * m15 * (m15 +1))
}
