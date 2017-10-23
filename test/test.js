let chai = require('chai')
let assert = chai.assert

let app = require('../script/rainDrops.js')

describe("Raindrops", function() {
	it("should return PlingPlang since 1755 contains 3 and 5 as prime factors", function() {
		assert(app.rainDrops(1755) == 'PlingPlang');
	});
	it("should return 34 since 34 does not contains 3, 5, or 7  as prime factors", function() {
		assert(app.rainDrops(34) == '34');
	});
	it("should return plong when 28 is passed in since 28 contains 7 as prime factor", function() {
		assert(app.rainDrops(28) == 'Plong');
	});
	it("should return 1097 since 34 does not contains 3, 5, or 7  as prime factors", function() {
		assert(app.rainDrops(1097) == '1097');
	});
	it("should return Plang when 1097887540 is passed in", function() {
		assert(app.rainDrops(1097887540) == 'Plang');
	});
	it("should return Please enter a number when an empty string is passed in", function() {
		assert(app.rainDrops() == "Please enter a number");
	});
	it("should return Please enter a number when a string is passed in", function() {
		assert(app.rainDrops("testing with string") == 'Please enter a number');
	});
	it("should return PlingPlang when 90 is passed in", function() {
		assert(app.rainDrops(90) == 'PlingPlang');
	});
	it("should return PlingPlangPlong when 105 is passed in", function() {
		assert(app.rainDrops(105) == 'PlingPlangPlong');
	});
	 it("should return Plang when 5 is passed in", function() {
		assert(app.rainDrops(5) == 'Plang');
	});
});
