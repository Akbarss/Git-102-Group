//Set в JavaScript — это встроенный объект, который позволяет хранить уникальные значения любого типа, будь то примитивы или объекты. Вот несколько примеров его использования и ситуаций, где он может пригодиться.

// Пример 1: Создание множества

const mySet = new Set([1, 2, 3, 3, 4, 5]);

console.log(mySet); // Output: Set { 1, 2, 3, 4, 5 }

// Пример 2: Добавление и удаление элементов

const mySet2 = new Set();

mySet2.add(1);
mySet2.add(2);
mySet2.add(2); // Дубликат не будет добавлен

console.log(mySet2); // Output: Set { 1, 2 }

mySet2.delete(1);

console.log(mySet2); // Output: Set { 2 }

// Пример 3: Проверка наличия элемента

const mySet3 = new Set([1, 2, 3]);

console.log(mySet3.has(2)); // Output: true
console.log(mySet3.has(4)); // Output: false

// Пример 4: Перебор множества

const mySet4 = new Set(["apple", "banana", "orange"]);

for (let item of mySet4) {
  console.log(item);
}
// Output:
// apple
// banana
// orange

/// Когда использовать Set:
// Удаление дубликатов из массива: Если у вас есть массив с дубликатами, Set позволяет легко получить массив только с уникальными значениями.

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
