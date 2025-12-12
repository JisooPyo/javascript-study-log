/**
 * 배열과 객체 구조 분해 할당
 * 배열이나 객체에 들어 있는 값을 꺼내어 여러 개의 변수에 한 번에 할당할 수 있는 문법
 */

/* =========================
 * 배열 구조 분해 할당
 * ========================= */

let colors = ["green", "blue", "purple"];

// 기존 방식: 인덱스를 사용해 하나씩 변수에 할당
let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 구조 분해 할당: 배열의 순서대로 변수에 값이 할당됨
let [d1, d2, d3] = colors;

console.log(d1); // green
console.log(d2); // blue
console.log(d3); // purple

// 선언과 할당을 분리해서도 구조 분해 가능
let e1, e2, e3;
[e1, e2, e3] = colors;

console.log(e1); // green
console.log(e2); // blue
console.log(e3); // purple

// 필요한 개수만큼만 구조 분해 가능
[e1, e2] = colors;

console.log(e1); // green
console.log(e2); // blue

// 배열 길이보다 많은 변수를 선언하면 남는 값은 undefined
let e4;
[e1, e2, e3, e4] = colors;

console.log(e1); // green
console.log(e2); // blue
console.log(e3); // purple
console.log(e4); // undefined

// 기본값 지정: 값이 없을 경우(default) 사용됨
[e1, e2, e3, e4 = "yellow"] = colors;

console.log(e1); // green
console.log(e2); // blue
console.log(e3); // purple
console.log(e4); // yellow

/* =========================
 * 구조 분해를 이용한 변수 값 교환
 * ========================= */

// 구조 분해를 사용하지 않은 전통적인 방식
let a = 10;
let b = 5;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b); // 5 10

// 구조 분해를 사용한 간단한 값 교환
[a, b] = [b, a];

console.log(a, b); // 10 5

/* =========================
 * 객체 구조 분해 할당
 * ========================= */

colors = {
  f1: "green",
  f2: "blue",
  f3: "purple",
};

// 객체 구조 분해: 키 이름을 기준으로 변수에 값이 할당됨
let { f1, f2, f3 } = colors;

console.log(f1); // green
console.log(f2); // blue
console.log(f3); // purple

// 기존 방식: 프로퍼티 접근 연산자를 사용
let color1 = colors.f1;
let color2 = colors.f2;
let color3 = colors.f3;

console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple

// 객체 구조 분해 시 변수 이름 변경 가능 (별칭 사용)
let { f1: g1, f2: g2, f3: g3 } = colors;

console.log(g1); // green
console.log(g2); // blue
console.log(g3); // purple

// 존재하지 않는 키를 구조 분해하면 undefined
colors = {
  h1: "green",
  h2: "blue",
  h3: "purple",
};

let { h1, h2, h3, h4 } = colors;

console.log(h1); // green
console.log(h2); // blue
console.log(h3); // purple
console.log(h4); // undefined

// 객체 구조 분해에서도 기본값 지정 가능
colors = {
  i1: "green",
  i2: "blue",
  i3: "purple",
};

let { i1, i2, i3, i4 = "yellow" } = colors;

console.log(i1); // green
console.log(i2); // blue
console.log(i3); // purple
console.log(i4); // yellow
