import surfboards from '../../Products/surfboards';
import cart from '../../Products/cart.js';
import { findById, } from '../utils.js';

QUnit.module('Utilities');

test('find product by id', assert => {

    const id = 'longboard';
    const expected = 'Log Longboard';

const foundSurfboard = findById(surfboards, id);

assert.ok(foundFruit);
assert.equal(foundSurfboard.name, expected);

});