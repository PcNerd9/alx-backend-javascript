import {listOfStudents, value} from "./9-hoisting.js";

console.log(value)
console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
