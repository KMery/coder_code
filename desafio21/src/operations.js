const runChecks = (num1, num2) => {
    const missingOperators = checkIfNotEmpty(num1, num2);
    const checkOperators = checkIfAreNumbers(num1, num2);
    if (missingOperators) {
        return missingOperators;
    } else if (checkOperators) {
        return checkOperators;
    } 
}

const checkIfNotEmpty = (num1, num2) => {
    if ((!num1 && num1 !== 0) || (!num2 && num2 !== 0)) {
        return "Must enter two numbers"
    }
}

const checkIfAreNumbers = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Operator must be numbers";
    }
}

const addition = (num1, num2) => {
    const checks = runChecks(num1, num2);
    if (checks) {
        return checks;
    }
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    const checks = runChecks(num1, num2);
    if (checks) {
        return checks;
    }  
    return num1 - num2;
}

const multiplication = (num1, num2) => {
    const checks = runChecks(num1, num2);
    if (checks) {
        return checks;
    } 
    return num1 * num2;
}

const division = (num1, num2) => {
    const checks = runChecks(num1, num2);
    if (checks) {
        return checks;
    } 
    return (num2 !== 0) ? num1 / num2 : "Invalid operation";
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division
}