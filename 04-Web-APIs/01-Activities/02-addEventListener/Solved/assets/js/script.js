// Creates a variable to hold the count
var count = 0;

// Uses querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incrementEl = document.querySelector('#increment');

// Displays the current count on the page
function setCounterText() {
  countEl.textContent = count;
}

// Increments the count on click and calls setCounterText()
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// Decrements the count on click and calls setCounterText()
decrementEl.addEventListener('click', function() {
  if (count > 0) {
    count--;
    setCounterText();
  }
});
