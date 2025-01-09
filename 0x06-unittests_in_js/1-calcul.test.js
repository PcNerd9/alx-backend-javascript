const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber Function", () => {
	describe("with SUM type", () => {
		it("with both argument as whole number", function () {
			assert.strictEqual(calculateNumber("SUM", 50, 30), 80);
			assert.strictEqual(calculateNumber("SUM", 12, 54), 66);
		})

		it("with the first argument as round number", function() {
			assert.strictEqual(calculateNumber("SUM", 40.4, 50), 90);
			assert.strictEqual(calculateNumber("SUM", 53.6, 23), 77);
			assert.strictEqual(calculateNumber("SUM", 51.5, 10), 62);
		});

		it("with the second argument as round number", function () {
			assert.strictEqual(calculateNumber("SUM", 53, 1.4), 54);
			assert.strictEqual(calculateNumber("SUM", 0, 59.9), 60);
			assert.strictEqual(calculateNumber("SUM", 49, 54.5), 104);
		});

		it("with both argument as round number", function() {
			assert.strictEqual(calculateNumber("SUM", 45.2, 61.4), 106);
			assert.strictEqual(calculateNumber("SUM", 20.5, 40.5), 62);
			assert.strictEqual(calculateNumber("SUM", 56.9, 1.6), 59);
		});
	});

	describe("with SUBTRACT type", function () {
		it("with both argument as whole number", function () {
			assert.strictEqual(calculateNumber("SUBTRACT", 40, 10), 30);
			assert.strictEqual(calculateNumber("SUBTRACT", 12, 50), -38);
		});
		
		it("with first argument as round number", function() {
			assert.strictEqual(calculateNumber("SUBTRACT", 40.2, 2), 38);
			assert.strictEqual(calculateNumber("SUBTRACT", 2.1, 12), -10);
			assert.strictEqual(calculateNumber("SUBTRACT", 46.6, 9), 38);
		});

		it("with second argument as round number", function() {
			assert.strictEqual(calculateNumber("SUBTRACT", 4, 30.5), -27);
			assert.strictEqual(calculateNumber("SUBTRACT", 55, 65.6), -11);
			assert.strictEqual(calculateNumber("SUBTRACT", 59, 43.2), 16);
		})

		it("with both argument as round numbers", function() {
			assert.strictEqual(calculateNumber("SUBTRACT", 54.2, 45.5), 8);
			assert.strictEqual(calculateNumber("SUBTRACT", 2.3, 54.2), -52);
		});
	});

	describe("with DIVIDE type", function () {
		it("with both argument as whole number", function () {
			assert.strictEqual(calculateNumber("DIVIDE", 10, 2), 5);
			assert.strictEqual(calculateNumber("DIVIDE", 2, 10), 0.2);
		});

		it("with second argument equal to zero", function() {
			assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error");
		});

		it("with first argument as round number", function() {
			assert.strictEqual(calculateNumber("DIVIDE", 30.3, 3), 10);
			assert.strictEqual(calculateNumber("DIVIDE", 44.6, 5), 9);
		});

		it("with second argument as round number", function() {
			assert.strictEqual(calculateNumber("DIVIDE", 45, 5.2), 9);
			assert.strictEqual(calculateNumber("DIVIDE", 50, 9.6), 5);
		});

		it("with both arguments as round numbers", function() {
			assert.strictEqual(calculateNumber("DIVIDE", 44.7, 5.2), 9);
			assert.strictEqual(calculateNumber("DIVIDE", 20.2, 9.9), 2);
		});
	});
});
