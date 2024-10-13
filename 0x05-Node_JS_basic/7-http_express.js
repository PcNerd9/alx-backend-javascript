const express = require('express');
const { readFile } = require("fs");

const app = express();
const port = 1245;

app.get("/", (req, res) => {
    res.send("Hello Holberton School!")
});

app.get("/students", (req, res) => {
    const path = process.argv[2];
    if (!path) {
            path = "";
    }      
    readFile(path, "utf-8", (err, data) => {
        if (err){
            res.send(`This is the list of our students\nCannot load the database`);
        }
        else {
            const records = data.split('\n');
            const cslist = [];
            const swelist = [];

            records.forEach((record) => {
                const field = record.split(',');
                if (field[3] === 'CS') {
                    cslist.push(field[0]);
                } else if (field[3] === 'SWE') {
                    swelist.push(field[0]);
                }
            });
            res.send(`This is the list of our students\nNumber of students: ${cslist.length + swelist.length}\nNumber of students in CS: ${cslist.length}. List: ${cslist.join(', ')}\nNumber of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`);
        }
    })
})

app.listen(port);

module.exports = app;