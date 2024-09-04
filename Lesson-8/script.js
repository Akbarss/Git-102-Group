// Пример 1: Перебор свойств объекта

const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(`${index}: ${colors[index]}`);
}

/// Пример 3: Перебор свойств объекта с вложенными объектами
const product = {
  name: "Laptop",
  price: 1000,
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
  },
};

for (const key in product) {
  if (typeof product[key] === "object") {
    for (const specKey in product[key]) {
      console.log(`${specKey}: ${product[key][specKey]}`);
    }
  } else {
    console.log(`${key}: ${product[key]}`);
  }
}

/// Дата и время

// Встречайте новый встроенный объект: Date. Он содержит дату и время, а также предоставляет методы управления ими.

// Например, его можно использовать для хранения времени создания/изменения, для измерения времени или просто для вывода текущей даты.

let now = new Date();
alert(now); // показывает текущие дату и время

let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

alert(`Цикл отработал за ${end - start} миллисекунд`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
  }
}

/// Сравнение элементов двух массивов

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log(`Match found: ${array1[i]}`);
    }
  }
}

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4, " "); // Форматирование для выравнивания чисел
  }
  console.log(row);
}

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    const product = i * j;
    let spaces = "";

    if (product < 10) {
      spaces = "   "; // 3 пробела для однозначных чисел
    } else if (product < 100) {
      spaces = "  "; // 2 пробела для двузначных чисел
    } else {
      spaces = " "; // 1 пробел для трехзначных чисел
    }

    row += spaces + product;
  }
  console.log(row);
}
