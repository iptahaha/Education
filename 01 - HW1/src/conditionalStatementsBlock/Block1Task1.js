//1. If a is even count a * b, otherwise a + b
function isEven(a, b) {
    return (a%2 === 0) ? (a * b) : (a + b);
}

module.exports = isEven;