/**
 * 배열 메서드 2
 * - concat
 * - join
 * - sort
 * - reduce
 * - isArray
 */

let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2)); // ['green', 'blue', 'purple', 'yellow']

array1 = ["green", "blue", "purple", "yellow"];

console.log(array1.join()); // green,blue,purple,yellow
console.log(array1.join(" ")); // green blue purple yellow

let colors = ["green", "blue", "purple"];
colors.sort();

console.log(colors); // ['blue', 'green', 'purple']

const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

colors.sort(compare);
console.log(colors); // ['purple', 'green', 'blue']

let numbers = [1, 100, 25, 50, 120, 3];

numbers.sort();
// 크기 순 X, 사전 순 정렬
console.log(numbers); // [1, 100, 120, 25, 3, 50]

const compare2 = (a, b) => {
  return a - b;
};
numbers.sort(compare2);

console.log(numbers); // [1, 3, 25, 50, 100, 120]

const compare3 = (a, b) => {
  return b - a;
};
numbers.sort(compare3);

console.log(numbers); // [120, 100, 50, 25, 3, 1]

let sum = 0;
numbers.forEach((elm) => {
  sum += elm;
});

console.log(sum);

sum = numbers.reduce((acc, cur, idx) => {
  console.log(`${acc} ${cur} ${idx}`);
  return acc + cur;
}, 0);

console.log(sum);

console.log(Array.isArray([1, 100, 50])); // true
console.log(Array.isArray({ id: 1, color: "green" })); // false
console.log(Array.isArray("string")); // false
console.log(Array.isArray(undefined)); // false
