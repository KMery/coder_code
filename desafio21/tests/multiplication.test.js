const { multiplication } = require('../src/operations');

test('Should return the result of a multiplication of two numbers', () => {
    const result = multiplication(5, 3);
    expect(result).toBe(15);
});

test('Should return the result of a multiplication of two numbers (decimals)', () => {
    const result = multiplication(2.1, 3.4);
    expect(result).toBe(7.14);
});

test('Should return the result of a multiplication of two numbers (zero)', () => {
    const result = multiplication(2.1, 0);
    expect(result).toBe(0);
});

test('Should return string "Operator must be numbers"', () => {
    const result = multiplication("1", 2);
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Operator must be numbers"', () => {
    const result = multiplication("1", "2");
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Must enter two numbers"', () => {
    const result = multiplication();
    expect(result).toBe("Must enter two numbers");
});