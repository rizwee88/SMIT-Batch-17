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
