// Модуль 5.3 Задание 2
let x = null;
console.log(typeof x)
if (typeof(x) === 'string'){
  console.log(x + ' - строка');
} else if (typeof(x) === 'boolean') {
  console.log(x + ' - логический тип');
} else if (typeof(x) === 'number') {
  console.log(x + ' - число');
} else {
  console.log('Тип ' + x + ' не определен');
}
