// String
let str = "";
// Number
let num = 1;
// Boolean

let isAdmin = true;
let isLogin = false;

console.log(typeof isAdmin);

// Null
let empty;

console.log(typeof empty);

// undefiend

// Object

const userObj = {
  name: "User",
  age: 17,
  greet: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

userObj.age = 29;

delete userObj.age;

console.log(userObj);
