//1. If a is even count a * b, otherwise a + b
function isEven(a, b) {
  return (a%2 === 0) ? (a * b) : (a + b);
}

//2. Determine which quarter the point with coordinates (x, y) belongs to
function showPointLocation(x,y) {
  let placeInfo = '';
  if (x > 0) {
    placeInfo = (y > 0) ? 'Точка лежит в I четверти' : "Точка лежит в IV четверти";
  } else if (x < 0){
    placeInfo = (y > 0) ? 'Точка лежит во II четверти' : "Точка лежит в III четверти";
  } else if (x === 0 && y === 0) {
    placeInfo = "Точка лежит в центре координат";
  } else {
    placeInfo = "Точка лежит на оси координат";
  }
  return placeInfo;
}

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

//4. To calculate the expression (max(a*b*c, a+b+c))+3
function calcTheExpression(a, b, c) {
  let sum = a + b + c;
  let multiple = a * b * c;
  return (multiple > sum) ? (multiple + 3) : (sum + 3);
}

//5. Write a program for determining the assessment of a student by his rating, based on the rules
function getGradeByRating(rating) {
  return (rating >= 0 && rating <= 19) ? 'Оценка - F' :
      (rating >= 20 && rating <= 39) ? 'Оценка - E' :
          (rating >= 40 && rating <= 59) ? 'Оценка - D' :
              (rating >= 60 && rating <= 74) ? 'Оценка - C' :
                  (rating >= 75 && rating <= 89) ? 'Оценка - B' :
                      'Оценка - А';
}