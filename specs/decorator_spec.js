const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

//what is behaviour of room

describe('Decorator', function(){
	let decorator;

	beforeEach(function(){
		decorator = new Decorator(0);
	});

	it('should have an empty paint stock', function(){
		const actual = decorator.paint_can_stock;
		assert.deepStrictEqual(actual, []);
	});

	it('should add paint can to stock', function(){
		Decorator.add.paint_can_stock(100);
		const actual = decorator.add_stock();
		assert.strictEqual(actual, 100);
	});

});
