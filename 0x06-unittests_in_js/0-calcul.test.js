const assert = require("assert");
const calculate = require("./0-calcul.js");

describe("Calculate Function", function () {
	it("should return 5 when adding 4 and 1", function () {
		assert.strictEqual(calculate(4, 1), 5);
	});

	it("should return 5 when adding 1.2 and 3.7", function () {
		assert.strictEqual(calculate(1.2, 3.7), 5);
	});

	it("should return 6 when adding 1.5 and 3.7", () => {
		assert.strictEqual(calculate(1.5, 3.7), 6);

	});
});
