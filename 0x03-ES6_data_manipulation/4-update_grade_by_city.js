export default function updateStudentGradeByCity(students, city, newGrades) {
	return students.filter(obj => obj.location === city)
	.map(obj => {
		for (const grad of newGrades) {
			if (grad.studentId === obj.id) {
				return {...obj, grade: grad.grade}
			}
		}
		return {...obj, grade: 'N/A'}
	})
}
