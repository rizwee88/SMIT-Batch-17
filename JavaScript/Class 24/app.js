// Get Image in Javascript

function submit() {
    var file = document.getElementById("file");
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(file.files[0]);
    image.style.display = "block";
}

// For of Loop

function getValue() {
    var cities = document.getElementsByName("city");
    for (var city of cities) {
        if (city.checked) {
            console.log(city.value)
        }
    }
}