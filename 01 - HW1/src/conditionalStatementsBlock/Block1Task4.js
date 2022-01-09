//4. To calculate the expression (max(a*b*c, a+b+c))+3
function calcTheExpression(a, b, c) {
    let sum = a + b + c;
    let multiple = a * b * c;
    return (multiple >= sum) ? (multiple + 3) : (sum + 3);
}

module.exports = calcTheExpression;