// Getting and setting the URL

var whereWeAt = window.location.href;


console.log(whereWeAt)

var domain = window.location.href = "http://www.google.com";

console.log(domain)

var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier";
window.location.href = destination;


// Getting and setting the URL another way

window.location.assign("http://www.me.com");

window.location.reload(true);
window.location.reload(false);
window.location.reload();

// Forward and reverse

history.back();
history.forward();
// Backspace key three times

history.go(-3);

// browser forward two URLs

history.go(2);

var whereUserCameFrom = document.referrer;

console.log(whereUserCameFrom)

// Filling the window with content

var monkeyWindow = window.open();

console.log(monkeyWindow)

var monkeyWindow = window.open();
var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
monkeyWindow.document.write(windowContent);