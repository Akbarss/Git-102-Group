// new Set()

const mySet = new Set(["user 1", "user 2", "user 3"]);

for (let item of mySet) {
  console.log(item);
}

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// mySet.delete(2);

// console.log(mySet);

// console.log(mySet);

function allUnique(str) {
  const charSet = new Set(str);
  return charSet.size === str.length;
}

console.log(allUnique("abcde")); // Output: true
console.log(allUnique("hello")); // Output: false
