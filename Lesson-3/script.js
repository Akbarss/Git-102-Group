// Способ 1: Пустой массив
let emptyArray = [];

// Способ 2: Массив с элементами разных типов
let mixedArray = [1, "hello", true, { key: "value" }];

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // Выводит 'apple'
console.log(fruits[1]); // Выводит 'banana'
console.log(fruits[2]); // Выводит 'cherry'

// Способ 3: Используя конструктор Array()
let newArray = new Array();

let colors = ["red", "green", "blue"];

colors[1] = "yellow"; // Изменяет 'green' на 'yellow'

console.log(colors); // Выводит ['red', 'yellow', 'blue']

//////////////////////////////////////////////////////////////////

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.length); // Выводит длину массива, в данном случае 5

numbers.push(6); // Добавляет элемент в конец массива
console.log(numbers); // Выводит [1, 2, 3, 4, 5, 6]

numbers.pop(); // Удаляет последний элемент массива
console.log(numbers); // Выводит [1, 2, 3, 4, 5]

numbers.splice(2, 1); // Удаляет 1 элемент начиная с индекса 2
console.log(numbers); // Выводит [1, 2, 4, 5]

let slicedArray = numbers.slice(1, 3); // Возвращает новый массив, содержащий элементы с индекса 1 по 2 (не включая 3)
console.log(slicedArray); // Выводит [2, 4]

///////////////////////////////////////////////

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(matrix[1][1]); // 5, центральный элемент
