//3. Find the sums of only positive out of three numbers
function getSumOfPositivNum(num1, num2, num3) {
    let sum;
    if (num1 >= 0) {
        if (num2 >= 0) {
            sum = (num3 >= 0) ? (num1 + num2 + num3) : (num1 + num2) ;
        } else {
            sum = (num3 >= 0) ? (num1 + num3) : num1;
        }
    } else if (num1 <= 0 && num2 >= 0) {
        sum = (num3 >= 0) ? (num2 + num3) : num2;
    } else {
        sum = (num3 >= 0) ? num3 : 'All numbers are negative';
    }
    return sum;
}

module.exports = getSumOfPositivNum;