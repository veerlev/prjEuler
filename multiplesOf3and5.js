/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/
function multiplesOf3and5(number) {
  // Good luck!
  var sum = 0;
  for (var i = 1; i * 3 < number; i++){
    sum += i * 3;
  }
  for (var i = 1; i * 5 < number; i++){
    var multiple = i * 5;
    if (multiple % 3 !== 0) {
      sum += multiple;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
