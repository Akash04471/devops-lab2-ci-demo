/**
 * Automated Unit Tests for Calculator Module
 * DevOps Lab Exercise 2 - Simulating Failure
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Module Unit Tests', () => {
    test('addition failure simulation', () => {
        // Intentionally wrong expected result (5+3 != 99)
        expect(add(5, 3)).toBe(99);
    });

    test('subtraction: 10 - 4 should equal 6', () => {
        expect(subtract(10, 4)).toBe(6);
    });
});
