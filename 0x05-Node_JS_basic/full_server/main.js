const readDatabase = require("./utils");

const data  = readDatabase("../database.csv").then(data => {
	console.log(data);
});
console.log(data);
