// Модуль 5.3 Задание 1

let a = prompt('Введите значение');
a = +a;
console.log(typeof a);

if (Number.isNaN(a)) {   // или if (a != a)
      alert("Упс, кажется, вы ошиблись")
    } else if (a % 2 === 0) { 
    alert("Число " + a + " чётное") 
    } else if (a % 2 !== 0) {
      alert("Число " + a + " нечётное")
    } 


