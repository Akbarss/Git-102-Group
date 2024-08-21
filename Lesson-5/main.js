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
