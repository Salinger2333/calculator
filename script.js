const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
    return array.reduce((product, current) => product * current)
};
const divide = function (a, b) {
    return a / b
}
const power = function (a, b) {
    return a ** b;
};

const operate = function (a, b, operate) {
    switch (operate) {
        case '+':
            sum(a, b)
            break
        case '-':
            subtract(a, b)
            break
        case '*':
            multiply(a, b)
            break
        case '/':
            divide(a, b)
            break
    }
}
