//������ 5.7 ������� 8
let myMap = new Map ([
  ["name", "Lyubov"],
  ["age", 26],
  ["city", "Moscow"]
]);
console.log(myMap.keys())
console.log(myMap.values())

myMap.forEach((value, key, map) => {
  console.log(`����- ${key} ��������- ${value}`);
});