const userObj = {
  name: "kamron",
  age: 12,
  email: "gulamalievkamron@gmail.com",
  isAdmin: "user",
};

console.log(userObj.name, userObj.age);

userObj.email = "newemail@example.com";
userObj.address = "123 Main St";

delete userObj.isAdmin;
console.log(userObj.isAdmin);

let userCopy = Object.assign({}, user);
userCopy.name = "jhon";

console.log(userObj.name);
console.log(userCopy.name);
