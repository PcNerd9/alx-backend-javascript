export default function getStudentIdsSum(students) {
	if (Array.isArray(students)) {
		return students.reduce((accumulator, currentObj) => accumulator + currentObj.id, 0);
	} else {
		return 0;
	};
}
