/**
 * spread 연산자 (...)
 * - 배열이나 객체가 가지고 있는 요소(값)들을 "펼쳐서" 복사할 때 사용
 * - 주로 객체/배열 복사, 병합, 확장에 사용됨
 */

/* =========================
 * 객체에서의 spread
 * ========================= */

// 기존 방식: 중복 코드가 많아짐
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const yellowToy = {
  type: "bear",
  price: 15000,
  color: "yellow",
};

// spread 사용: 공통 속성은 한 번만 정의
const toy2 = {
  type: "bear",
  price: 15000,
};

const blueToy2 = {
  ...toy, // toy2의 프로퍼티들을 복사
  color: "blue", // 새로운 프로퍼티 추가
};

const yellowToy2 = {
  ...toy,
  color: "yellow",
};

console.log(blueToy2);
console.log(yellowToy2);

/*
 * 주의:
 * spread는 "얕은 복사"를 수행함
 * (중첩 객체가 있을 경우 참조는 공유됨)
 */

/* =========================
 * 배열에서의 spread
 * ========================= */
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

// 배열을 펼쳐서 하나의 새로운 배열 생성
const rainbow = [...color1, "green", ...color2];

// ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
console.log(rainbow);

/**
 * rest 연산자 (...)
 * - 여러 개의 값을 하나의 배열(또는 객체)로 "모아서" 받음
 * - 구조 분해 할당이나 함수 매개변수에서 주로 사용됨
 */

/* =========================
 * 객체에서의 rest
 * ========================= */

const greenToy = {
  type: "bear",
  price: 15000,
  color: "green",
};

// 기존 구조 분해
const { type, price, color } = greenToy;

console.log(type); // bear
console.log(price); // 15000
console.log(color); // green

// rest 사용: 특정 프로퍼티를 제외한 나머지를 모음
const redToy = {
  type2: "bear",
  price2: 15000,
  color2: "green",
};

const { type2, ...rest } = redToy;

// rest는 반드시 "마지막"에 와야 함
// const { ...rest, type2 } = redToy; // ❌ Error

console.log(type2); // bear
console.log(rest); // [price2: 15000, color2: 'green']

/* =========================
 * 배열에서의 rest
 * ========================= */

const colors = ["red", "orange", "yellow", "green"];

// 앞의 값은 각각 할당하고, 나머지는 배열로 묶음
const [c1, c2, ...restColors] = colors;

console.log(c1, c2); // red orange
console.log(restColors); // ['yellow', 'green']

/* =========================
 * 함수 매개변수에서의 rest
 * ========================= */

// 기존 방식: 매개변수 개수가 고정됨
const print = (a, b, c, d, e, f) => {
  console.log([c, d, e, f]);
};

print(1, 2, 3, 4, 5, 6); // [3, 4, 5, 6]

// rest 사용: 나머지 인자를 배열로 받음
const printRest = (a, b, ...rest) => {
  console.log(a, b, rest);
};

printRest(1, 2, 3, 4, 5, 6); // 1 2 [3, 4, 5, 6]

/* =========================
 * spread + 함수 호출
 * ========================= */

const printNumber = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};

const numbers = [1, 2, 3, 4, 5, 6];

// 기존 방식: 하나씩 전달
printNumber(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
); // 1 2 3 4 5 6

// spread 사용: 배열을 인자로 펼쳐 전달
printNumber(...numbers); // 1 2 3 4 5 6

// rest로 모든 인자를 배열로 받기
const printNumberByRest = (...rest) => {
  console.log(rest);
};

printNumberByRest(...numbers); // [1, 2, 3, 4, 5, 6]
