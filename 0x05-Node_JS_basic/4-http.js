#!/usr/bin/node

const { createServer } = require("http");
const port = 1245

const app = createServer((req, res) => {
	res.end("Hello Holberton School!");
})

app.listen(port, () => {
	console.log(`Server is running on port ${1245}`);
});

module.exports = app;


