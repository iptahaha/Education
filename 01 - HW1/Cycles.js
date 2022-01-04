//1. Find the sum of even numbers and their quantity in the range from 1 to 99
function calcSumOfEvenNum() {
    let sum = 0; //sum of even numbers (сумма чётных чисел)
    let q = 0; //quantity of even numbers (количество чётных чисел)
    for (let i = 1; i < 100; i++) {
        if (i%2 === 0) {
            sum = sum + i;
            q++;
        }
    }
    return `Sum of even numbers (сумма чётных чисел): ${sum}\nQuantity of even numbers (количество чётных чисел): ${q}`;
}

//2. Is it a prime number to check?
function isPrimeNum(x) {
    let check = 'Prime number (простое число)';
    for (let i = 2; i < x; i ++) {
        if (x % i === 0) {
            check = 'Composite Number (составное число)';
            break;
        }
    }
    return check;
}

//3. Find the root of a natural number up to an integer (consider sequential selection and the binary search method)
//sequential selection:
function getRootSequential(num) {
    for (let i = 1; ; i++) {
        if ((num - i*i) <= 1) {
            return `Корень из ${num} равен ${i}`
        }
    }
}
//binary search method:
function getRooBinary (num) {
    let left = 1;
    let right = num;
    let middle = (left + right + 1) / 2;
    let square;
    while ((num - middle*middle) <= 0) {
        if (middle*middle > num) {
            right = middle;
        } else {
            left = middle;
        }
        square = middle;
        middle = (left + right + 1) / 2;
    }
    return `Корень из ${num} равен ${Math.round(square)}`;
}

//4. Calculate the factorial of the number n. n! = 1*2*…*n-1*n
function calcNumFactorial(n) {
    let fac = 1;
    for (let i = 0; i < n; i++){
        fac = fac * (n - i);
    }
    return `${n}! = ${fac}`;
}

//5. Calculate the sum of the digits of a given number
function calcSumOfNumDigits(num){
    num = String(num);
    let sumOfDigits = 0;
    for (let char of num) {
        let digit = parseInt(char);
        sumOfDigits = sumOfDigits + digit;
    }
    return `Сумма цифр числа ${num} равна ${sumOfDigits}`;
}

//6. Print a number that is a mirror image of a sequence of digits of a given number
function getNumReflection(num) {
    let refNum = '';
    while (num > 0) {
        let digit = num%10;//остаток от деления на 10 - последняя цифра числа
        num = (num - digit) / 10;//от числа отсекается последняя цифра
        refNum += digit;
    }
    return refNum;
}