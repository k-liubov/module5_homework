// ������ 5.3 ������� 2
let x = null;
console.log(typeof x)
if (typeof(x) === 'string'){
  console.log(x + ' - ������');
} else if (typeof(x) === 'boolean') {
  console.log(x + ' - ���������� ���');
} else if (typeof(x) === 'number') {
  console.log(x + ' - �����');
} else {
  console.log('��� ' + x + ' �� ���������');
}
