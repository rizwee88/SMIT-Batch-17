console.log("Hello")

// Attendance Checker

function checkAttendance(student) {
    var lastClass = [1122, 2233, 3344];
    if (lastClass.indexOf(student) !== -1) {
        return "Present"
    } else {
        return "Absent"
    }
}

console.log(checkAttendance(2233))

// DOM (Document Object Model)

// Inner Text

// document.getElementById("main").innerText = "Adil Ahmed"

// Inner HTML

// document.getElementById("main").innerHTML = "<h1>Adil Ahmed</h1>"

// Save Element and show in UI

function submit() {
    var input = document.getElementById("text-input")
    console.log(input.value)
}

