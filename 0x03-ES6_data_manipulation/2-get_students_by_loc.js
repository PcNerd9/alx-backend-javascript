export default function getStudentsByLocation(students, city) {
	if (Array.isArray(students)) {
		return students.filter(obj => obj.location === city)
	} else {
		return []
	}
}
