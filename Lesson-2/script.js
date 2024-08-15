// String
// let name = "";

// Number

// let num = 2;

// boolean

// let isAdmin = true;
// let isLogin = true;

// Null

// undefiend
// let empty;

// console.log(typeof empty);

// Function

// function Click(name) {
//   return `Hello ${name}`;
// }

// alert(Click("User"));

// function num2(a, b) {
//   return a + b;
// }

// console.log(num2(9, 8));

// const numFunc = (x, y) => {
//   return x * y;
// };

// console.log(numFunc(5, 5));

const userObj = {
  name: "User",
  age: 12,
  infoShow: function () {
    alert(`Hello ${this.product} ${this.name} ${this.age}`);
  },
};

const addNewKeyObj = Object.create(userObj);
addNewKeyObj.product = "Test";

userObj.infoShow();
