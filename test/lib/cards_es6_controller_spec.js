const expect = require('chai').expect;
const getWinner = require('../../cards_es6.js').getWinner;

describe('the cards game', () => {
	it('consider tie when there are no cards', () => {
		expect('TIE').to.equal(getWinner([],[]));
	});
});
