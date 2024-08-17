export default function updateUniqueItems(map) {
	if (!(map instanceof Map)) {
		throw new Error("Cannot process")
	};

	for (const element of map) {
		map.set(element[0], element[1] === 1 ? 100 : element[1]);
	};
	return map;
}
