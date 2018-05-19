const totalMarks = 100;
let studentMarks = 90;

console.log("Total Marks are " + totalMarks);
console.log(`Your marks are ${studentMarks}`);

if (studentMarks == totalMarks) {
	console.log("A+");
} else if (studentMarks > 90) {
	console.log("A");
} else if (studentMarks > 80) {
	console.log("B");
} else if (studentMarks > 60) {
	console.log("C");
} else if (studentMarks > 40) {
	console.log("D");
}  else if (studentMarks > 20) {
	console.log("E");
} else  {
	console.log("F");
}