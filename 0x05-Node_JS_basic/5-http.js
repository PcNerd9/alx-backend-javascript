#!/usr/bin/node

const { createServer } = require("http");

const port = 1245;

const app = createServer((req, res) => {
	if (req.url === "/students") {
		res.write("This is the list of our students\n");
		res.write("Number of students: 10\n");
		res.write("Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n");
		res.write("Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy");
		res.end();
	} else {
		res.end("Hello Holberton School!");
	}
	})

app.listen(port, () => {
	console.log("Server is running on port " + port);
})

module.exports = app
