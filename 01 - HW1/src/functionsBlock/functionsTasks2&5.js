// 2 and 5*. Вводим число(0-999/ 0-999миллиардов), получаем строку с прописью числа.

function makeStringOfBigNum(dataNumber) {
  if (typeof dataNumber !== 'number' || dataNumber > 999999999999 || dataNumber < 0) {
    return 'Пожалуйста, введите положительное число от 0 до 999 миллиардов!';
  }
  if (dataNumber === 0) {
    return 'Число "0" прописью - zero';
  }
  let num = dataNumber;
  let result = ''; //сюда будет записан результат
  let block; //текстовое выражение трёхзначного блока цифр

  if (num <= 999) {
    block = makeStringOfNum (num,0);
    return ('Число "' + dataNumber + '" прописью - ' + block);
  } else {
    let counter = 0; //counter - счётчик тысяч
    while (num > 0) {
      let part = num % 1000;
      num = (num - part)/1000;
      block =  makeStringOfNum (part,counter);
      result = block + result;
      counter++;
    }
  }
  return ('Число "' + dataNumber + '" прописью - ' + result);
}

function makeStringOfNum(A,i) {
  let z = A%10, y = ((A - z)/10)%10, x = (((A - z)/10 - y)/10)%10; //A=100*x+10*y+z - разбиваем трёхзначное число на составные цифры
  let One = ['one','two','three','four','five','six','seven','eight','nine'];
  let Teen = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let Doz = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let Count = ['',' thousand ',' million ',' billion '];
  
  if (x===0 && y===0 && z!==0) return One[z - 1] + Count[i];
  else if (x===0 && y!==0 && z===0) return Doz[y - 1] + Count[i];
  else if (x===0 && y===1 && z!==0) return Teen[z - 1] + Count[i];
  else if (x===0 && y>1 && z!==0) return Doz[y - 1] + ' ' + One[z - 1] + Count[i];
  else if (x!==0 && y===0 && z===0) return One[x - 1] + ' hundred ' + Count[i];
  else if (x!==0 && y===0 && z!==0) return One[x - 1] + ' hundred ' + One[z - 1] + Count[i];
  else if (x!==0 && y!==0 && z===0) return One[x - 1] + ' hundred ' + Doz[y - 1] + Count[i];
  else if (x!==0 && y===1 && z!==0) return One[x - 1] + ' hundred ' + Teen[z - 1] + Count[i];
  else if (x!==0 && y>1 && z!==0) return One[x - 1] + ' hundred ' + Doz[y - 1] + ' ' + One[z - 1] + Count[i];
  else return Count[i];
}

module.exports = {makeStringOfBigNum};