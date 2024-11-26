interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string
}

const student1: Student {
	firstName: "Habeeb";
	lastName: "Ajayi";
	age: 30;
	location: "San Francisco"
}
const student2: Student {
	firstName: "Nofisat";
	lastName: "Badru";
	age: 23;
	location: "New York"
}

const students : Student[] = [ student1, student2 ]
