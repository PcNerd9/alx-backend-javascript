import { readFile } from "fs";


function readDatabase(path) {
	return new Promise((resolve, reject) => {
		readFile(path, "utf-8", (err, data) => {
			if (err) {
				reject(error);
			} else {
				const records = data.split('\n').slice(1);
            			const students = {};

            			records.forEach((record) => {
							const field = record.split(",");
							if (field[0] !== null && field[3] !== null) {
								if (students.hasOwnProperty(field[3])) {
									students[field[3]].push(field[0]);
								} else {
									students[field[3]] = [ field[0] ]
								}
							}
            			});
				 resolve(students);
			}
		});
	})
}

export default readDatabase;
