// Create your HTML Page via DOM Methods here!

// We access the <body> element by using `document.body`
var body = document.body;

var docCreEle = document.createElement.bind(document);

// Add a centered h1
// We create HTML elements by passing the element by name to `createElement()`
// and storing the value in a variable
var h1El = docCreEle("h1");

// We add text by using the `textContent` property
h1El.textContent = "Welcome to my page";

// We add style by using the `setAttribute()` method
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// We append the newly created element to the DOM using `appendChild()`
body.appendChild(h1El);

// Add a centered h2
var h2El = docCreEle("h2");
h2El.textContent =
  "This HTML document was created using JavaScript and Chrome Dev Tools";
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
body.appendChild(h2El);

// Add a centered image with a centered caption under it
var infoEl = docCreEle("div");
var imgEl = docCreEle("img");
var kittenEl = docCreEle("div");

kittenEl.textContent = "This is my kitten";

infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200ittenEl.setAttribute("style", "font-size:25px; text-align:center;");

body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);

// Add a list of your favorite foods (or other favorites)
var favoriteEl = docCreEle("div");
var listEl = docCreEle("ol");
var li1 = docCreEle("li");
var li2 = docCreEle("li");
var li3 = docCreEle("li");
var li4 = docCreEle("li");

favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";

favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background: #888888; padding:20px;");

body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

var liElAppCh = listEl.appendChild.bind(listEl);

liElAppCh(li1);
liElAppCh(li2);
liElAppCh(li3);
liElAppCh(li4);


var foo = function(){ console.log("here")}

foo();