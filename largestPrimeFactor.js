/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {
  // Good luck!
  var numberValue
  for (var i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0) {
      while (number % i === 0){
        number /= i;
      }
    }
  }
  return (i > number ? i : number);
}

largestPrimeFactor(13195);
