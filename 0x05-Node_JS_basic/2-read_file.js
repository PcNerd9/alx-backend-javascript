const { count } = require("console");
const {readFileSync, read} = require("fs");

function countStudents(path) {
    let data;
    try {
        data = readFileSync(path, "utf-8");
        
    }
    catch {
        throw new Error("Cannot load the database")
    }
    let data_arr = data.split("\n").slice(1);
        data_arr = data_arr.map(data => data.split(","));

        const numberOfStudents = data_arr.length;

        const details = {
            "CS": [],
            "SWE": []
        };
        data_arr.forEach(data => {
            details[data[3]].push(data[0]);
        })
        console.log("Number of students:", numberOfStudents);

        for (let field in details) {
            console.log(`Number of students in ${field}: ${details[field].length}. List: ${details[field].join(", ")}`)
        }
        
        

}

module.exports =countStudents