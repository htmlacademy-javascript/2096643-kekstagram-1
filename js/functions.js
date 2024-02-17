//Функция для проверки, является ли строка палиндромом
function reverseString (string) {
  return string.toLowerCase().replaceAll(' ', '').trim().split('').reverse().join('');
}

const checkPalindrom = (string) =>{
  const isPalindrom = reverseString(string);
  string = string.toLowerCase().replaceAll(' ', '');
  if (string === isPalindrom) {
    return true;
  }
  return false;
};
checkPalindrom('Лёша на полке клопа нашёл ');


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const getNumber = (string) =>{
  const number = string.replace(/^\D+/g, '').replace(/[^0-9]/g, '');
  const result = parseInt(number, 10);
  return result;
};
Math.round(getNumber('1 кефир, 0.5 батона'));
/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/
const padString = (string, minLength, symbols) => {
  if (string.length >= minLength) {
    return string;
  }

  const symbolLength = minLength - string.length;
  let repeadSymbol = '';
  while(repeadSymbol.length < symbolLength){
    repeadSymbol += symbols;
  }
  return repeadSymbol.slice(0, symbolLength) + string;
};
padString('q', 4, 'werty');

/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
Эта функция нам пригодится для валидации формы.
 */
const checkLength = (string, length) => {
  if (string.length <= length) {
    return true;
  }
  return false;
};

checkLength('проверяемая строка', 20);
