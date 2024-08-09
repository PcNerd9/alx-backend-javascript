export default class Building {
	constructor(sqft) {

		if (this.evacuationWarningMessage == undefined) {
			throw new Error("Class extending Building must override evacuationWarningMessage");
		}
		if (typeof sqft !== 'number') {
			throw new TypeError("Sqft must be a number");
		};
		this._sqft = sqft;
	};

}
