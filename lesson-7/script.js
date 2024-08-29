// let str = "";

// for (let i = 1; i < 10; i++) {
//   str = str + i;
// }

// console.log(str);

// let str = "";
// let i = 0;

// while (i < 9) {
//   str = str + i;
//   i++;
// }

// console.log(str);

// let str = "Hello World";

// for (let char of str) {
//   console.log(char);
// }

// let user = {
//   id: Math.random(),
//   name: "User 1",
// };

// for (const key of Object.values(user)) {
//   console.log(`${key}:  ${user[key]}`);
// }

// const cars = [
//   { brand: "Toyota", model: "Corolla" },
//   { brand: "Honda", model: "Civic" },
//   { brand: "Ford", model: "Focus" },
// ];

// function brandGet(cars) {
//   let brands = [];
//   for (const car of cars) {
//     brands.push(car.brand);
//   }
//   return brands;
// }

// const carsBrand = brandGet(cars);
// console.log(carsBrand);

const words = ["apple", "banana", "cherry"];

function countCharacters() {
  const char = [];
  for (let num of words) {
    char.push(num.length);
  }
  return char;
}

const result = countCharacters(words);
console.log(result); // [5, 6, 6]
