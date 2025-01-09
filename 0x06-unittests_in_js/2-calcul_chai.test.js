const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai.js");

describe("calculateNumber Function", () => {
	describe("with SUM type", () => {
		it("with both argument as whole number", function () {
			expect(calculateNumber("SUM", 50, 30)).to.equal(80);
			expect(calculateNumber("SUM", 12, 54)).to.equal(66);
		})

		it("with the first argument as round number", function() {
			expect(calculateNumber("SUM", 40.4, 50)).to.equal(90);
			expect(calculateNumber("SUM", 53.6, 23)).to.equal(77);
			expect(calculateNumber("SUM", 51.5, 10)).to.equal(62);
		});

		it("with the second argument as round number", function () {
			expect(calculateNumber("SUM", 53, 1.4)).to.equal(54);
			expect(calculateNumber("SUM", 0, 59.9)).to.equal(60);
			expect(calculateNumber("SUM", 49, 54.5)).to.equal(104);
		});

		it("with both argument as round number", function() {
			expect(calculateNumber("SUM", 45.2, 61.4)).to.equal(106);
			expect(calculateNumber("SUM", 20.5, 40.5)).to.equal(62);
			expect(calculateNumber("SUM", 56.9, 1.6)).to.equal(59);
		});
	});

	describe("with SUBTRACT type", function () {
		it("with both argument as whole number", function () {
			expect(calculateNumber("SUBTRACT", 40, 10)).to.equal(30);
			expect(calculateNumber("SUBTRACT", 12, 50)).to.equal(-38);
		});
		
		it("with first argument as round number", function() {
			expect(calculateNumber("SUBTRACT", 40.2, 2)).to.equal(38);
			expect(calculateNumber("SUBTRACT", 2.1, 12)).to.equal(-10);
			expect(calculateNumber("SUBTRACT", 46.6, 9)).to.equal(38);
		});

		it("with second argument as round number", function() {
			expect(calculateNumber("SUBTRACT", 4, 30.5)).to.equal(-27);
			expect(calculateNumber("SUBTRACT", 55, 65.6)).to.equal(-11);
			expect(calculateNumber("SUBTRACT", 59, 43.2)).to.equal(16);
		})

		it("with both argument as round numbers", function() {
			expect(calculateNumber("SUBTRACT", 54.2, 45.5)).to.equal(8);
			expect(calculateNumber("SUBTRACT", 2.3, 54.2)).to.equal(-52);
		});
	});

	describe("with DIVIDE type", function () {
		it("with both argument as whole number", function () {
			expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
			expect(calculateNumber("DIVIDE", 2, 10)).to.equal(0.2);
		});

		it("with second argument equal to zero", function() {
			expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
		});

		it("with first argument as round number", function() {
			expect(calculateNumber("DIVIDE", 30.3, 3)).to.equal(10);
			expect(calculateNumber("DIVIDE", 44.6, 5)).to.equal(9);
		});

		it("with second argument as round number", function() {
			expect(calculateNumber("DIVIDE", 45, 5.2)).to.equal(9);
			expect(calculateNumber("DIVIDE", 50, 9.6)).to.equal(5);
		});

		it("with both arguments as round numbers", function() {
			expect(calculateNumber("DIVIDE", 44.7, 5.2)).to.equal(9);
			expect(calculateNumber("DIVIDE", 20.2, 9.9)).to.equal(2);
		});
	});
});
