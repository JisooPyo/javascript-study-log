/**
 * 호이스팅: 식별자의 선언문이 스코프의 최상단으로 끌어올려진 듯한 현상
 * 종류 - 변수 호이스팅, 함수 호이스팅
 */

/* 함수 호이스팅 */

connectStrings("study", "hoisting");

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

/* let 변수 호이스팅 */

// console.log(num1);
// let num1 = 123; // 에러발생

// ⬇️ 자바스크립트는 이렇게 받아들어요!
// Temporal Dead Zone: 변수를 사용하는 것을 허용하지 않는 공간
// let num;   -> TDZ에 있기 때문에 호이스팅이 발생하지 않는 것처럼 보인다.
// console.log(num);
// num = 123;

/* var 변수 호이스팅 */

console.log(num2);
var num2 = 123; // 에러발생 X, undefined

// ⬇️ 자바스크립트는 이렇게 받아들여요!
// var num2;
// console.log(num2);
// num2 = 123;

/**
 * var vs. num
 *
 * var 키워드는 변수를 생성한 다음 바로 메모리 공간에 변수의 공간을 미리 할당해주지만
 * let, const 키워드는 변수가 초기화될 때까지 메모리공간이 확보되지 않는다.
 * 그에 따라 let, const 키워드로 생성된 변수는 사용할 수 없는 공간인 TDZ에 들어가게 된다.
 */

/**
 * 호이스팅은 자바스크립트의 기본 성질이지만 호이스팅이 많이 발생하게 작성된 코드는 가독성이 좋지 않기 때문에
 * 코드를 직관적으로 해셕하기 어려워 코드의 이해도가 떨어지고 여러가지 오류들을 일으킬 수 있다.
 * 되도록이면 let, const로 선언
 * 호이스팅이 발생하지 않도록 하는 것이 좋다!
 */
