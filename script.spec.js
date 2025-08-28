const calculator = require('./script');

describe('add', () => {
    test('adds two whole numbers', () => {
        expect(calculator.add(3,4)).toBe(7);
    });

    test('adds 0 and 0', () => {
        expect(calculator.add(0,0)).toBe(0);
    });  
});

describe('subtract', () => {
    test('subtract numbers', () => {
        expect(calculator.subtract(10, 7)).toBe(3);
    });

    test('subtracts negative numbers', () => {
        expect(calculator.subtract(-10, -8)).toBe(-2);
    });

    test('subtracts negative & positive numbers', () => {
        expect(calculator.subtract(-9, 10)).toBe(-19);
    });
});

describe('multiply', () => {
    test('multiplies by 0', () => {
        expect(calculator.multiply(17, 0)).toBe(0);
    });
    test('multiplies negative numbers', () => {
        expect(calculator.multiply(-8, -6)).toBe(48);
    });
    test('multiplies both neg & pos', () => {
        expect(calculator.multiply(-9, 2)).toBe(-18);
    });
});

describe('divide', () => {
    test('divides negative numbers', () => {
        expect(calculator.divide(-10, -5)).toBe(2);
    });
    test('divides by both neg & pos', () => {
        expect(calculator.divide(21, -3)).toBe(-7);
    });
});