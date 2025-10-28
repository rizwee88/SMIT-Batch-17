var totalMarks = 200;
// Array of Objects
var students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

function calculateMarks(student) {
  var total = student.scienceMarks + student.englishMarks;
  var percentage = (total / totalMarks) * 100;
  return { percentage, total };
}

for (let index = 0; index < students.length; index++) {
  var result = calculateMarks(students[index]);
  console.log("-------------------------------------");
  console.log("-------------------------------------");
  console.log("Name: " + students[index].name);
  console.log("Science: " + students[index].scienceMarks);
  console.log("English: " + students[index].englishMarks);
  console.log("Total Marks: " + result.total);
  console.log("Percentage: " + result.percentage);
  result.percentage >= 40 ? console.log("PASSED") : console.log("FAILED"); // Turnery Operators
}
