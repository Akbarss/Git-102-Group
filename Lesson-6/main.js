let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

// let str = "";
// let i = 0;

// while (i < 9) {
//   str = str + i;
//   i++;
// }

// console.log(str);
// Вывод: "012345678"

// Пример 2: Итерация по строке

const text = "Hello";

for (const char of text) {
  console.log(char);
}
// Вывод: H, e, l, l, o

// Пример 3: Итерация по массиву объектов

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

for (const user of users) {
  console.log(user.name);
}
// Вывод: Alice, Bob, Charlie

// Пример 3: Итерация по массиву чисел и вычисление их суммы
// const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const number of numbers) {
  sum += number;
}

console.log(sum);
// Вывод: 150

// Пример 4: Итерация по объекту с использованием Object.keys

const user = {
  name: "John Doe",
  age: 28,
  city: "New York",
};

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
// Вывод: name: John Doe, age: 28, city: New York

// Task student Пример 5: Итерация по объекту с использованием Object.values

// const product = {
// 	name: 'Laptop',
// 	price: 1000,
// 	brand: 'Dell'
//   };

// Вывод: Laptop, 1000, Dell

// Подсчёт количества символов в строках массива Напиши функцию countCharacters, которая принимает массив строк и возвращает массив чисел, где каждое число соответствует количеству символов в соответствующей строке массива.

// Функция для преобразования массива объектов

function getCarBrands(cars) {
  const brands = [];
  for (const car of cars) {
    brands.push(car.brand);
  }
  return brands;
}

const cars = [
  { brand: "Toyota", model: "Corolla" },
  { brand: "Honda", model: "Civic" },
  { brand: "Ford", model: "Focus" },
];

const carBrands = getCarBrands(cars);
console.log(carBrands);
// Вывод: ['Toyota', 'Honda', 'Ford']

// Функция для фильтрации элементов массива

function filterEvenNumbers(array) {
  const evenNumbers = [];
  for (const num of array) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

const numberss = [1, 2, 3, 4, 5, 6];
const evens = filterEvenNumbers(numberss);
console.log(evens);
// Вывод: [2, 4, 6]

function countCharacters(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].length);
  }
  return result;
}

const words = ["apple", "banana", "cherry"];
const result = countCharacters(words);
console.log(result); // [5, 6, 6]

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [10, 20, 30, 40, 50];
const maxNumber = findMax(numbers);
console.log(maxNumber); // 50

function filterByAge(people, minAge) {
  const result = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= minAge) {
      result.push(people[i]);
    }
  }
  return result;
}

const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Tom", age: 25 },
];

// const result = filterByAge(people, 25);
console.log(result);
// [{ name: 'Jane', age: 30 }, { name: 'Tom', age: 25 }]
