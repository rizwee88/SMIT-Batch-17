// function greetWorld() {
//     var greeting = "Hello world!";
//     aler(greeting);
// }

// Using Try and Catch

function greetWorld() {
    try {
        var greeting = "Hello world!";
        aler(greeting);
    }
    catch (err) {
        alert(err);
    }
}


// Try catch (using throw)

function checkPassword() {
    try {
        var pass = document.getElementById("f1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++) {
            if (isNaN(pass(i, i + 1)) === false) {
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false) {
            throw "Include at least 1 number.";
        }
    }
    catch (err) {
        alert(err);
    }
}

// Handling events within JavaScript

var b1 = document.getElementById("button1");
b1.onclick = sayHello;

document.getElementById("button1").onclick = sayHello;

function sayHello() {
    alert("Hi there.");
}

