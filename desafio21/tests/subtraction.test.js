const { subtraction } = require('../src/operations');

test('Should return as a result the subtraction of two numbers', () => {
    const result = subtraction(3, 1);
    expect(result).toBe(2);
});

test('Should return as a result the subtraction of two numbers', () => {
    const result = subtraction(2, 4);
    expect(result).toBe(-2);
});

test('Should return as a result the subtraction of two numbers', () => {
    const result = subtraction(3.77, 2.1);
    expect(result).toBe(1.67);
});

test('Should return string "Operator must be numbers"', () => {
    const result = subtraction("1", 2);
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Operator must be numbers"', () => {
    const result = subtraction("1", "2");
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Must enter two numbers"', () => {
    const result = subtraction();
    expect(result).toBe("Must enter two numbers");
});