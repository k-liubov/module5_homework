//Модуль 5.7 Задание 8
let myMap = new Map ([
  ["name", "Lyubov"],
  ["age", 26],
  ["city", "Moscow"]
]);
console.log(myMap.keys())
console.log(myMap.values())

myMap.forEach((value, key, map) => {
  console.log(`Ключ- ${key} Значение- ${value}`);
});