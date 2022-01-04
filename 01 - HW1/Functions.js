/*
//1. Получить строковое название дня недели по номеру дня
let d = prompt ('Введите номер дня недели, 1);
let DayName = GetDayName (d);
function GetDayName(num) {
  (num == 1) ? return 'Понедельник' :
  (num == 2) ? return 'Вторник' :
  (num == 3) ? return 'Среда' :
  (num == 4) ? return 'Четверг' :
  (num == 5) ? return 'Пятница' :
  (num == 6) ? return 'Суббота' :
  return 'Воскресенье';
}
alert (d + ' день недели это ' + DayName);



//Найти расстояние между двумя точками в двухмерном декартовом пространстве
alert ('Введите координаты первой точки');
let x1 = prompt ('Введите x', 1);
let y1 = prompt ('Введите y', 1);
alert ('Далее введите координаты второй точки');
let x2 = prompt ('Введите x', 1);
let y2 = prompt ('Введите y', 1);
let dist = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
alert ('Расстояние между точками - ' + dist);

//Вводим число(0-999), получаем строку с прописью числа
let Number1 = prompt ('Введите число от 0 до 999', 0);
let i = 0;
let rez = NumPropis (Number1, i);
alert ('Число "' + Number1 + '" прописью - ' + rez + ' ');


//Вводим число(0-999 миллиардов), получаем строку с прописью числа
let Number2 = prompt ('Введите число от 0 до 999 миллиардов', 0);
let num2 = Number2;
let i = 0;//счётчик тысяч
let rezult ='';//сюда будет записан результат
let part;//текстовое выражение трёхзначного блока цифр
for (i=1; num2 >= 1000; i++) {
  let A = num2 % 1000;
  num2 = (num2 - A)/1000;
  part =  NumPropis (A,i);
  rezult = part + rezult;
}
part = NumPropis (num2,i);
rezult = part + rezult;
alert ('Число "' + Number2 + '" прописью - ' + rezult + ' ');

function NumPropis(A,i) {
  let z = A%10, y = ((A - z)/10)%10, x = (((A - z)/10 - y)/10)%10; //A=100*x+10*y+z - разбиваем трёхзначное число на составные цифры
  let One = ['one','two','three','four','five','six','seven','eight','nine'];
  let Teen = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let Doz = ['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
  let Count = ['',' thousand ',' million ',' billion '];
  
  if (x==0 && y==0 && z!=0) return One[z - 1] + Count[i];
  else if (x==0 && y!=0 && z==0) return Doz[y - 1] + Count[i];
  else if (x==0 && y==1 && z!=0) return Teen[z - 1] + Count[i];
  else if (x==0 && y>1 && z!=0) return Doz[y - 1] + ' ' + One[z - 1] + Count[i];
  else if (x!=0 && y==0 && z==0) return One[x - 1] + ' hundred ' + Count[i];
  else if (x!=0 && y!=0 && z==0) return One[x - 1] + ' hundred ' + ' ' + Doz[y - 1] + Count[i];
  else if (x!=0 && y==1 && z!=0) return One[x - 1] + ' hundred ' + ' ' + Teen[z - 1] + Count[i];
  else if (x!=0 && y>1 && z!=0) return One[x - 1] + ' hundred ' + ' ' + Doz[y - 1] + ' ' + One[z - 1] + Count[i];
  else return Count[i];
}
*/

//Вводим прописью число(0-999 миллиардов), получаем число
let Number3 = prompt ('Enter the number in words from 0 to 999 billion', 'one');
let str = Number3;
//FOR TEST: 
//eleven billion twenty million five hundred thousand eight
//one million
//one
//fifteen
//eight hundred thousand
let billion = '000';
let million = '000';
let thousand = '000';
let hundred = '000';
let Rezult = [];

let ArrBill = str.split(' billion');
let ArrMill = str.split(' million');
let ArrThous = str.split(' thousand');
let RestOfNumber = str;
let b = ArrBill.length;
let m = ArrMill.length;
let t = ArrThous.length;

if (b == 2) {
  billion = WordToNumber(ArrBill[0]);
  alert('billion = ' + billion);
  if (ArrBill[1]>=1) {
    ArrBill = str.split(' billion ');
  }
  ArrMill = (ArrBill[1]).split(' million');
  ArrThous = (ArrBill[1]).split(' thousand');
  RestOfNumber = ArrBill[1];
}
Rezult.push(billion);
alert('Rezult (billion) = ' + Rezult);

if (m == 2) {
  alert('MILLION');
  alert(ArrMill[1]);
  alert(typeof(ArrMill[1]));
  million = WordToNumber(ArrMill[0]);
  alert('million = ' + million);
  if (ArrMill[1]>=1) {
    ArrMill = str.split(' million ');
  }
  ArrThous = (ArrMill[1]).split(' thousand');
  RestOfNumber = ArrMill[1];
}
Rezult.push(million);
alert('Rezult (million) = ' + Rezult);

if (t == 2) {
  thousand = WordToNumber(ArrThous[0]);
  alert('thousand = ' + thousand);
  if (ArrThous[1]>=1) {
    ArrThous = str.split(' thousand ');
  }
  RestOfNumber = ArrThous[1];
}
Rezult.push(thousand);
alert('Rezult (thousand) = ' + Rezult);

hundred = WordToNumber(RestOfNumber);
alert('hundred = ' + hundred);
Rezult.push(hundred);
alert('Rezult (ALL) = ' + Rezult);

let WordOfNumber = '';
for (let i=0; i<=Rezult.length-1; i++) {
  WordOfNumber = WordOfNumber + String(Rezult[i]);
}
WordOfNumber = WordOfNumber/1;
alert('The number "' + Number3 + '" in digits is - ' + WordOfNumber);

function WordToNumber(Word) {
  let One = ['one','two','three','four','five','six','seven','eight','nine'];
  let Teen = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let Doz = ['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
  let Numbers = [1,2,3,4,5,6,7,8,9,0];
  let Rez = [0,0,0];
  let ArrHundred = Word.split(' hundred');
  let ArrDozen = Word.split(' ');
  let h = ArrHundred.length;
  if (h == 2) {
    for (let i=0; i<=9; i++) {
      if (ArrHundred[0] == One[i]) {Rez[0]=Numbers[i];}
    }
    ArrDozen = String(ArrHundred.pop());
    ArrDozen = ArrDozen.split(' ');
    ArrDozen.shift(); 
  }
  for (let i=0; i<=ArrDozen.length-1; i++) {
    for (let j=0; j<=9; j++) {
      if (ArrDozen[i] == One[j]) {Rez[2] = Numbers[j];}
      else if (ArrDozen[i] == Teen[j]) {Rez[1] = 1; Rez[2] = Numbers[j];}
      else if (ArrDozen[i] == Doz[j]) {Rez[1] = Numbers[j];}
    }
  }
  let Number = String(Rez[0]) + String(Rez[1]) + String(Rez[2]);
  return Number;
}



