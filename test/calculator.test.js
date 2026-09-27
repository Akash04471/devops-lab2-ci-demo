/**
 * Automated Unit Tests for Calculator Module
 * DevOps Lab Exercise 2
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Module Unit Tests', () => {
    test('addition: 5 + 3 should equal 8', () => {
        expect(add(5, 3)).toBe(8);
    });

    test('subtraction: 10 - 4 should equal 6', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('multiplication: 4 * 3 should equal 12', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('division: 20 / 5 should equal 4', () => {
        expect(divide(20, 5)).toBe(4);
    });

    test('division by zero throws error', () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});
