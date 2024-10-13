const http = require("http");
const { readFile } = require("fs");

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello Holberton School!");
    }
    else if (req.url === "/students") {
        const path = process.argv[2]
        if (!path) {
            path = "";
        }
        res.write("This is the list of our students\n")
        readFile(path, "utf-8", (err, data) => {
            if (err){
                res.end("Cannot load the database");
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
                res.write(`Number of students: ${cslist.length + swelist.length}\n`);
                res.write(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}\n`);
                res.write(`Number of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`);
                res.end()
            }
        })
    }
})

app.listen(1245);

module.exports = app;