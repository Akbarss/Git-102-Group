// 1. Метод filter создает новый массив со всеми элементами, которые прошли проверку, реализованную в предоставленной функции

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// В этом примере filter проходит по каждому элементу массива numbers, и если число делится на 2 без остатка (number % 2 === 0), оно попадает в новый массив evenNumbers.

// 2 Метод find возвращает первый элемент в массиве, который удовлетворяет условию, указанному в функции обратного вызова.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((user) => user.name === "Bob");
console.log(user); // { id: 2, name: 'Bob' }

// Метод findIndex возвращает индекс первого элемента в массиве, который удовлетворяет условию, указанному в функции обратного вызова. Если ни один элемент не удовлетворяет условию, возвращает -1.

const numbers2 = [5, 12, 8, 130, 44];
const index = numbers2.findIndex((number) => number > 10);
console.log(index); // 1

// Метод includes проверяет, содержит ли массив определенный элемент, и возвращает true или false.

const fruits = ["apple", "banana", "grape"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("pear")); // false

/// Метод sort сортирует элементы массива на месте и возвращает отсортированный массив. По умолчанию элементы сортируются как строки в лексикографическом порядке.

const numbers3 = [4, 2, 5, 1, 3];
numbers3.sort((a, b) => a - b);
console.log(numbers3); // [1, 2, 3, 4, 5]
