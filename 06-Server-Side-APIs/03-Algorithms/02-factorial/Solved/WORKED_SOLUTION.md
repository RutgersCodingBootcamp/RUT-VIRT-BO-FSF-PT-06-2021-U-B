# Factorial

In this problem, we're given a number (`num`) and need to return the [factorial](https://en.wikipedia.org/wiki/Factorial) of `num`.

If you don't understand what a factorial is, you should spend some time reading up on them. There's no way you'll be able to solve a problem if you don't totally understand what it's asking for. In an interview situation, it's okay and actually expected that you'll ask the interviewer clarifying questions to make sure that you know what problem you're expected to solve.

A factorial of a number is the product of all positive integers from `1` up to the number. The only exception is `0`, where its factorial is `1`.

Knowing this, we can right away return `1` if the given number is `0`:

```js
var factorial = function(num) {
  if (num === 0) {
    return 1;
  }
};
```

There's another part of this problem that should be familiar. Take for example, how the factorial of `4` would be calculated:

```js
4 * 3 * 2 * 1 === 24;
```

Notice how we're counting down from `num` (`4` in this case) to `1`? We should know how to count down with a loop from the previous `countdown` problem.

```js
var factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  for (var i = num; i > 0; i--) {}
};
```

Now we're looping through all the numbers from `num` down to `1`. We need to multiply all of these numbers together. We need to keep track of the product with a variable:

```js
var factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  var result = 1;

  for (var i = num; i > 0; i--) {
    result = result * i;
  }
};
```

This is similar to the previous `sum-array` problem where we had to add all the numbers in a loop. This should multiply all of the numbers between `num` and `1`. We just need to return this after the loop completes:

```js
var factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  var result = 1;

  for (var i = num; i > 0; i--) {
    result = result * i;
  }

  return result;
};
```

This should satisfy the problem, but we can optimize our solution a little. We can set the loop condition to run until `i` is more than `1`, and then remove our if statement, since the factorial of both `0` and `1` is `1`:

```js
var factorial = function(num) {
  var result = 1;

  for (var i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
};
```

Whenever you're presented a problem, make sure you understand it as completely as you can. Then try to break it apart into smaller pieces, try to recognize if any of those pieces are similar to problems you've already solved before. In this case, part of this problem was similar to the `countdown` problem, and another part was similar to the `sum-array` problem.
