export default function cleanSet(set, startString) {
	let concatString = ''
	
	if (startString === '') {
		return concatString;
	}
	for (const element of set) {
		if (element.startsWith(startString)) {
			concatString += element.slice(startString.length);
			concatString += '-';
		}
	};
	if (concatString.endsWith("-")) {
		concatString = concatString.slice(0, -1);
	}
	return concatString;
}
