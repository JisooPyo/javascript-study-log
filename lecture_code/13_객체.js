/**
 * 객체: 한 번에 여러 개의 데이터 값을 저장할 수 있는 자료형
 */

/**
 * 생성자 함수, 리터럴
 */
let obj = new Object();
console.log(obj);
let obj2 = {};
console.log(obj2);

let book = {
  title: "자바스크립트 첫걸음", // 객체의 프로퍼티들. 프로퍼티의 key는 고유해야 한다.
  author: "김효빈",
  category: "자바스크립트",
  year: undefined,
  color: function () {
    console.log("orange");
  },
};

/**
 * 보통 객체 프로퍼티의 값을 꺼내 사용할 때에는 점 표기법을 많이 사용하지만
 * 객체의 키 값들이 고정적이지 않고 특정 함수의 매개변수에 따라 키 값을 계속해서 변경해야 하는 경우에는 괄호 표기법을 활용
 */

let car = {
  name: "붕붕",
  model: "morning",
  color: "black",
};

// 점 표기법
console.log(car.name);
console.log(car.model);

// 괄호 표기법
console.log(car["name"]);
console.log(car["color"]);

const getValue = (key) => {
  console.log(car[key]);
};

getValue("color");

/**
 * 객체 프로퍼티 추가, 수정, 삭제
 */

// let으로 객체 선언
let cat = {
  age: 2,
  name: "멍멍이",
};

cat.name = "야옹이";
cat["color"] = "white";

console.log(cat);

cat = {
  age: 3,
};

console.log(cat);

// const로 객체 선언
// 객체 프로피티 추가 & 수정 가능
const cat2 = {
  age: 2,
  name: "멍멍이",
};

cat2.name = "야옹이";
cat2["color"] = "white";

console.log(cat2);

delete cat2.color;

// ⬇️ 오류 발생
// cat2 = {
//   age: 3,
// };

console.log(cat2);

/**
 * 객체 프로퍼티의 값이 함수일 경우 이를 메서드라고 부른다.
 * 이 메서드는 객체 내부의 프로퍼티들에 접근할 수 있는 특별한 기능이 있다.
 * 메서드에서는 this라는 키워드를 사용하여 자신이 속해 있는 객체를 가리킬 수 있다.
 * 메서드를 생성할 때에는 화살표 함수보다는 이렇게 function 키워드를 사용해서 생성하는 것이 좋다.
 * 화살표 함수 내부의 this 키워드는 호출한 객체를 가리키지 않고 가장 바깥에 있는 글로벌 객체인 윈도우 객체를 가리키기 때문.
 */

const person = {
  name: "홍길동",
  age: 23,
  print: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
};

person.print();
person["print"]();
