console.log("Hello")

// Add Event Listner (Click)

var btn = document.getElementById("myBtn");


btn.addEventListener("click", function () {
    alert("Button Clicked!");
});

// Add Event Listner (Mouse Over and Out)

var text = document.getElementById("demo");

text.addEventListener("mouseover", function () {
    text.style.color = "blue";
});

text.addEventListener("mouseout", function () {
    text.style.color = "black";
});