export default class HolberonClass {
	constructor(size, location) {
		if (typeof size !== 'number') {
			throw new Error("Size must be a number");
		};
		if (typeof location !== 'string') {
			throw new Error("Location must be a number");
		};
		this._size = size;
		this._location = location;
	};

	toString(){
		return this._location;
	};

	valueOf() {
		return this._size;
	};
}
