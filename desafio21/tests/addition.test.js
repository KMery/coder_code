const { addition } = require('../src/operations');

test('Should return the result of sum two numbers', () => {
    const result = addition(1, 2);
    expect(result).toBe(3);
});

test('Should return the result of sum two numbers (decimals)', () => {
    const result = addition(1.5, 3.27);
    expect(result).toBe(4.77);
});

test('Should return the result of sum two numbers (Large numbers)', () => {
    const result = addition(23456667.213, 12312516234236426472747.23);
    expect(result).toBe(1.231251623423645e+22);
});

test('Should return string "Operator must be numbers"', () => {
    const result = addition("1", 2);
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Operator must be numbers"', () => {
    const result = addition("1", "2");
    expect(result).toBe("Operator must be numbers");
});

test('Should return string "Must enter two numbers"', () => {
    const result = addition();
    expect(result).toBe("Must enter two numbers");
});