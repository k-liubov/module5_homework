// ������ 5.3 ������� 1

let a = prompt('������� ��������');
a = +a;
console.log(typeof a);

if (Number.isNaN(a)) {   // ��� if (a != a)
      alert("���, �������, �� ��������")
    } else if (a % 2 === 0) { 
    alert("����� " + a + " ������") 
    } else if (a % 2 !== 0) {
      alert("����� " + a + " ��������")
    } 


