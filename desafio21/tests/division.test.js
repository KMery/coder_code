const { division } = require('../src/operations');

test('Should return as a result the division of two numbers', () => {
    const result = division(4, 2);
    expect(result).toBe(2);
});

test('Should return as a result the division of two numbers (decimals)', () => {
    const result = division(3.5, 1.5);
    expect(result).toBeCloseTo(2.33);
});

test('Should return string "Operator must be numbers"', () => {
    const result = division("1", 2);
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Operator must be numbers"', () => {
    const result = division("1", "2");
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Must enter two numbers"', () => {
    const result = division();
    expect(result).toBe("Must enter two numbers");
});

test('Should return string "Invalid operation"', () => {
    const result = division(2, 0);
    expect(result).toBe("Invalid operation");
});