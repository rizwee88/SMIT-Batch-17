console.log("Hello");

// Counting Elements
var liElements = document.getElementsByTagName("li");
var howManyLi = liElements.length;
console.log(howManyLi);

// Counting Elements (Loop)

for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "coming soon";
  }
}

// Attributes

var target = document.getElementById("p1");
var hasClass = target.hasAttribute("class");
console.log(hasClass)

// Get Attributes and Set Attributes

var target = document.getElementById("div1");
var attVal = target.getAttribute("class");
console.log(attVal)

var target = document.getElementById("div1");
target.setAttribute("class", "special");
console.log(target)
