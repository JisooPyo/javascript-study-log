/**
 * 배열 내장함수
 */

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for each
console.log("---------------for each---------------");

arr.forEach((elm) => {
  console.log(elm);
});

arr.forEach((elm, idx) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
});

arr.forEach((elm, idx, array) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
  console.log(array);
});

// map
console.log("---------------map---------------");
// map에서도 elm, idx, array 전달 가능.
let newArray = arr.map((elm) => {
  return elm * 10;
});

console.log(newArray); // [10, 20, 30, 40, 50]

// at
console.log("---------------at---------------");

let colors = ["green", "blue", "purple"];
console.log(colors.at(1)); // blue
console.log(colors.at(-1)); // purple(배열의 마지막에 위치한 값)

// includes
console.log("---------------include---------------");

console.log(colors.includes("blue")); // true
console.log(colors.includes("yellow")); // false
// index 2 이상의 요소에서 "blue"가 포함되는지 확인.
console.log(colors.includes("blue", 2)); // false
console.log(colors.includes("blue", 1)); // true

// indexOf
console.log("---------------indexOf---------------");
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("yellow")); // -1. 포함되지 않으면 -1

// findIndex: 배열의 모든 요소에 대해 순차적으로 callback 함수를 수행하며 조건을 가장 먼저 만족하는 배열 요소의 인덱스를 반환
// elm, idx, array 전달 가능.
console.log("---------------findIndex---------------");

colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let idx = colors.findIndex((elm) => elm.color === "purple");
console.log(idx); // 2

colors.findIndex((elm, idx, array) =>
  console.log(`${idx} 번째 값은 - id: ${elm.id}, color: ${elm.color}`)
);
colors.findIndex((elm, idx, array) => console.log(array));

// find: 특정값이 있는 요소의 값 자체를 반환하는 내장함수
console.log("---------------find---------------");
idx = colors.find((elm) => elm.color === "purple");
console.log(idx); // {id: 3, color: 'purple'}

// fliter
console.log("---------------filter---------------");
let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray); // [{id: 2, color: 'blue'}, {id: 3, color: 'purple'}]

// slice
console.log("---------------slice---------------");
colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];

// colors에서 인덱스가 1이상 3미만인 것을 추출하여 배열로 만듬.
let sliceArray = colors.slice(1, 3);
console.log(sliceArray); // [{id: 2, color: 'blue'}, {id: 3, color: 'purple'}]
