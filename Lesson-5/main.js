let accessAllowed;
let age = prompt("Сколько вам лет?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// let accessAllowed = (age > 18) ? true : false;

let company = prompt("Какая компания создала JavaScript?", "");

if (company == "Netscape") {
  alert("Верно!");
} else {
  alert("Неправильно.");
}

// let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

const role = "admin";

switch (role) {
  case "user":
    console.log("Привет, пользователь!");
  case "admin":
    console.log("Привет, администратор!");
  case "superadmin":
    console.log("Привет, суперадмин!");
    break;
  default:
    console.log("Привет, гость!");
}

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Неверный день");
}

// For

// Пример 1: Простой вывод элементов массива:

let fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Пример 2: Увеличение каждого элемента на 1:

let numbers = [1, 2, 3, 4, 5];
let incrementedNumbers = [];

numbers.forEach((number) => {
  incrementedNumbers.push(number + 1);
});

console.log(incrementedNumbers);

/// Пример 3: Фильтрация элементов массива:

let scores = [85, 92, 78, 90, 88];
let passingScores = [];

scores.forEach((score) => {
  if (score >= 90) {
    passingScores.push(score);
  }
});

console.log("Passing scores:", passingScores);
