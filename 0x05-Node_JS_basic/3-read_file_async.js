const { count } = require('console');
const {readFile} = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => { 
        readFile(path, "utf-8", (err, data) => {
            if (err){
                reject("Cannot load the database");
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
                console.log(`Number of students: ${cslist.length + swelist.length}`);
                console.log(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}`);
                console.log(`Number of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`);
                resolve();
            }
        })
    })
}
module.exports = countStudents
