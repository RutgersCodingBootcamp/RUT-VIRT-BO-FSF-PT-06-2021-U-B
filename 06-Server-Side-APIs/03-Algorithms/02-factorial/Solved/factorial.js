// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  var result = 1;

  for (var i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
};
