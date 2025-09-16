console.log("Hello");

// Conditional Statement

if (dayOfWk === "Sat" || dayOfWk === "Sun") {
  alert("Whoopee!");
} else if (dayOfWk === "Fri") {
  alert("TGIF!");
} else {
  alert("Shoot me now!");
}

// Switch Statement
switch (dayOfWk) {
  case "Sat":
    alert("Whoopee");
    break;
  case "Sun":
    alert("Whoopee");
    break;
  case "Fri":
    alert("TGIF!");
    break;
  default:
    alert("Shoot me now!");
}
