# Vowel Count

In this problem, we're given a string and need to count and return the number of vowels in the string.

Before writing any code, we should think about how we'd solve this problem _without_ code.

1. Go through each letter one by one.

2. If the letter is a vowel, count it.

3. Answer with the final vowel count after we've gone through all the letters.

Since we're going through each letter, one by one, we probably need a loop:

```js
for (var i = 0; i < str.length; i++) {}
```

We want to check if the current character is a vowel, so we could use an if-statement for this:

```js
var vowelCount = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
    }
  }
};
```

If the letter is a vowel, we need to count it:

```js
var vowelCount = function(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
};
```

And finally we need to answer or _return_ the final count. We'll have this after the loop ends:

```js
var vowelCount = function(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
};
```

At this point, we have a solution that _mostly_ works, but here we're only checking for lowercase vowels in the string, what if there are capital letters? And is there a simpler way to check if the string is a vowel besides writing such a large conditional?

We can throw all possible vowels in an array, and then check if the lowercase version of the current character is present inside of the vowel array. This will cut down on lines of code and make sure that our solution works with capital letters.

```js
var vowelCount = function(str) {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};
```

We should always prioritize getting our code to work for most cases before working on edge case or simplifying our solution. Worrying too much about writing elegant code upfront can prevent us from ever reaching a solution at all.
