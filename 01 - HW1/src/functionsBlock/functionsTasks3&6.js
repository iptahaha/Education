//3 and 6*. Вводим прописью число(0-999/ 0-999миллиардов), получаем число.

function getNumOfString(dataString){
  if (typeof dataString !== 'string') {
    return 'Пожалуйста, введите строку с положительным числом от 0 до 999 миллиардов!';
  }
  let str = dataString;
  let result = [];
  if (str.includes(' billion')) {
    const ArrBill = str.split(' billion');
    const billion = TextToNumber(ArrBill[0]);
    str = ArrBill[1];
    result.push(billion);
  }
  if (str.includes(' million')) {
    const ArrMill = str.split(' million');
    const million = TextToNumber(ArrMill[0]);
    str = ArrMill[1];
    result.push(million);
  }
  if(str.includes(' thousand')) {
    const ArrThous = str.split(' thousand');
    const thousand = TextToNumber(ArrThous[0]);
    str = ArrThous[1];
    result.push(thousand);
  }
  const hundred = TextToNumber(str);
  result.push(hundred);
  result = (result.join(''))/1;
  return (`The number "${dataString}" in digits is - ${result}`);
}

function TextToNumber(text) {
  if (text.startsWith(' ')){
    text = text.slice(1);
  }
  const One = ['one','two','three','four','five','six','seven','eight','nine'];
  const Teen = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const Doz = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const Numbers = [1,2,3,4,5,6,7,8,9,0];
  let outputNum = [0,0,0];
  if (text.includes('hundred')) {
    const ArrHund = text.split(' hundred');
    ArrHund[0].split('');
    for (let i = 0; i < One.length; i++) {
      if (ArrHund[0] === One[i]) {
        outputNum[0] = Numbers[i];
      }
    }
    text = ArrHund[1];
    if (text.startsWith(' ')){
      text = text.slice(1);
    }
  }
  let ArrWord = text.split(' ');

  for (let j = 0; j < ArrWord.length; j++) {
    for (let i = 0; i < 10; i++) {

      if (ArrWord[j].includes(Doz[i])) {
        outputNum[1] = Numbers[i];
      }
      if (ArrWord[j].includes(Teen[i])) {
        outputNum[1] = 1; outputNum[2] = Numbers[i];
      }
      if (ArrWord[j].includes(One[i])) {
        outputNum[2] = Numbers[i];
      }
    }
  }
  return outputNum.join('');
}

module.exports = {getNumOfString};