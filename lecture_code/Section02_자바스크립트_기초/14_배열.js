/**
 * 배열
 */
// 배열 생성자(Array Constructor)를 사용하여 배열 생성
let arr = new Array();
console.log(arr); // []

let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [ , , ] -> 혼동의 여지가 있어 배열 리터럴을 사용하여 배열 생성하는 것을 권장한다고 함.

// 배열 리터럴(array literal)을 사용하여 배열 생성
let array = [];
let array1 = [1, 2, 3];
let array2 = [3];

console.log(array); // []
console.log(array1); // [1, 2, 3]
console.log(array2); // [3]

let array3 = [
  { name: "홍길동" },
  1,
  "array",
  function () {
    console.log("hello world!");
  },
  null,
  undefined,
];

console.log(array3); // [{...}, 1, 'array', f, null, undefined]

/**
 * 배열 요소에 접근하는 방법
 */
let array4 = [1, "hello", null];

console.log(array4[0]); // 1
console.log(array4[1]); // hello
console.log(array4[2]); // null

/**
 * 배열 요소를 추가, 수정하고 삭제하는 방법
 * push(): 배열의 마지막 인덱스에 요소 추가
 * unshift(): 배열의 첫 번째 인덱스에 요소 추가
 */
// 추가
let fruits = ["apple", "orange", "peach"];
fruits.push("grape");

console.log(fruits); // ['apple', 'orange', 'peach', 'grape']

fruits.unshift("cherry");

console.log(fruits); // ['cherry', 'apple', 'orange', 'peach', 'grape']

// 수정
let animal = ["cat", "dog", "hamster"];
animal = ["cat", "rabbit", "hamster"]; // animal이 const인 경우 이렇게 수정은 되지 않늗다. 요소 수정은 가능
animal[2] = "parrot";

console.log(animal); // ['cat', 'rabbit', 'parrot']

// 삭제
let colors = ["purple", "skyblue", "green"];
colors.pop();
console.log(colors); // ['purple', 'skyblue']

colors.shift();
console.log(colors); // ['skyblue'];

colors = ["purple", "skyblue", "green", "yellow", "orange"];
console.log(colors.length); // 5

// splice(start, end): start <= index <= end 인 index의 요소를 삭제한다.
colors.splice(1, 3);
console.log(colors); // ['purple', 'orange']
console.log(colors.length); // 2
