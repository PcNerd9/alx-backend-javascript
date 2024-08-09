import HolbertonCourse from "./2-hbtn_course.js";

const course = new HolbertonCourse("PHP", 10, ["Bob", "Jane"]);
course.name = "Python";
course.length = 20;
course.students  = ["Habeeb"];
console.log(course.students);
