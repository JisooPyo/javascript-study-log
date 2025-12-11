/**
 * 함수 선언식 & 함수 표현식
 *
 * 화살표 함수:
 * - ES6 이후의 문법. function 키워드 대신 화살표 모양을 사용해서 만든 함수
 * - 기존 function 키워드를 사용해 함수를 작성한 방식보다 훨씬 간단(?)하게 함수를 정의할 수 있다.
 *
 * 함수 표현식:
 * 변수에 함수를 마치 하나의 값처럼 할당
 *
 * 함수 선언식과 함수 표현식의 차이점
 * 1. 호이스팅
 * 2. 함수 선언식은 함수의 이름을 작성하지만 함수 표현식은 익명함수의 형태로 함수를 작성하고 변수에 익명함수를 할당한다.
 */

/*
 * 함수 선언식
 */
function func1() {
  console.log("hello javascript");
}

/*
 * 함수 표현식
 */
// func 변수에 함수를 할당하는 식
const func2 = () => {
  console.log("hello javascript");
};
const func3 = function () {
  console.log("hello javascript");
};

/*
 * 함수 선언식의 호이스팅
 */
hoisted1();

function hoisted1() {
  console.log("hoisting");
}

/*
 * 함수 표현식의 호이스팅
 */
// 아래 코드에서 Error 발생: Cannot access 'hoisted2' before initialization
// 호이스팅이 발생하지 않는 것처럼 보인다.

// ```
// hoisted2();

// const hoisted2 = () => {
//   console.log("hoisting");
// };
// ```

/*
 * 화살표 함수
 */
const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b;

console.log(add3(10, 20));

/**
 * 콜백 함수: 다른 함수의 매개변수로 넘겨준 함수
 */
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log("결과: " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값:" + result * 2);
};

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);

const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});
