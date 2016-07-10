module.exports = function() {
	var faker = require("faker");
	var _     = require("lodash");
	var _num  = Math.floor(Math.random() * 20);
	return {
		'list' : _.times(_num, function() {
			return {
				isbn: Math.floor(Math.random() * 10000000),
				name: faker.name.findName()
			}
		})
	}
}