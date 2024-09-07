// let user = {
//   id: Math.random(),
//   name: "User",
//   age: 20,
//   infoUser: {
//     phone: "+998 97 000 00 00",
//     adress: "City 1",
//   },
// };

// for (const key in user) {
//   if (typeof user[key] === "object") {
//     for (const userinfo in user[key]) {
//       console.log(`${userinfo}: ${user[key][userinfo]}`);
//     }
//   } else {
//     console.log(`${key} ${user[key]}`);
//   }
// }

// let date = new Date();

// alert(date);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let sec = i * i * i;
// }

// let end = new Date();

// alert(`${start - end} `);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i]; j++) {
    console.log(`${i}${j}:  ${arr[i][j]}`);
  }
}
