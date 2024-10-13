import readDatabase from "../utils.js";

class StudentsController {
    static getAllStudents(request, response) {
        const path = process.argv[2]
        readDatabase(path)
        .then(students => {
            const sortedKey = Object.keys(students).sort();
            let responseData = `This is the list of our students`;
            sortedKey.forEach(key => {
                const data = `\nNumber of students in ${key}: ${students[key].length}. List: ${students[key].join(", ")}`
                responseData += data;
        })
            response.status(200).send(responseData);
        })
        .catch(error => {
            response.status(500).send("Cannot load the database");
        });
    }

    static getAllStudentsByMajor(request, response, ){
        const path = process.argv[2];
        readDatabase(path)
        .then(data => {
            const major = request.params.major
            if (major !== "CS" && major !== "SWE") {
                response.status(500).send("Major parameter must be CS or SWE");
            }
            response.status(200).send(`List: ${data[major].join(", ")}`)
        })
        .catch(error => {
            response.status(500).end("Cannot load the database");
        });
        


    }
}

export default StudentsController