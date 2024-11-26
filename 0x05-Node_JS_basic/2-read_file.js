#!/urs/bin/node

const fs = require("fs");

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, {encoding: "utf8"});
		let list_data = data.split("\n");
		list_data = list_data.slice(1, -1);
		let no_student = list_data.length;
		const data_info = {}
		for (const row of list_data) {
			const row_list = row.split(",");
			if (row_list[3] in data_info) {
				let field = row_list[3];
				let name = row_list[0];
				data_info[field]["count"]++;
				data_info[field]["names"].push(name);
			} else {
				data_info[row_list[3]] = {
					"count": 1,
					"names": [row_list[0]]
				}
			}
		}
		console.log(`Number of students: ${no_student}`);
		for (const key in data_info) {
			const names = data_info[key].names.join(", ");
			const count = data_info[key].count;
			console.log(`Number of students in ${key}: ${count}. List: ${names}`);
		}
	} catch(err) {
		throw new Error("Cannot load the database");
	}
}

module.exports = countStudents
