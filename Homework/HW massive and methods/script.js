//створення масиву та додавання елементів в масив
const num = +prompt("Введіть довжину масиву: ");
const arr = [];

for(let i=0; i<num; i++) {       
	const element = prompt("Введіть елемент масиву: ");
  arr.push(element);
  console.log(arr);
}


//або сортування масиву за зростанням, якщо є строкові елементи
/* arr.sort(( a , b , c = a - b )=> c == c ? c : a > b ? 1 : -1 ); */

console.log(arr.sort((a,b) => a-b));// сортування масиву за зростанням 
console.log(arr.splice(1,3));//елементи які видаляються з масиву включно з 2 по 4
console.log(arr);//результат масиву з видаленими елементами
