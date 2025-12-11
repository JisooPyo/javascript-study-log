/**
 * 스코프: 변수와 함수가 영향을 미치는 범위
 * 전역 / 지역 으로 나뉨
 */

let global = "나는 전역 변수입니다";

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다";
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();

  console.log(global);
  console.log(outer);
  // console.log(inner); // 오류 발생: inner is not defined
}

outerFunction();

function print() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i); // 오류 발생: i is not defined
}

print();

function print2() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // 오류 발생 X: var - 함수 스코프를 가짐.
}

print2();

/**
 * let vs. var
 * let: 블록 스코프
 * var: 함수 스코프. 잘 사용하지 않음.
 * var로 선언된 변수가 let 키워드로 선언된 변수보다 훨씬 유연하다고 생각할 수 있지만
 * 코드의 양이 많은 프로그램에서 var키워드로 변수를 선언하면 특정 변수가 이미 선언되어 있는지 판단하기 어려울 뿐만 아니라
 * 어디에서 어떻게 사용되고 있는지 파악하기 힘들고 프로그램 상의 오류를 발생시킬 수 있게 된다는 단점이 있다.
 *
 * ** 이번 강의에서는 var 키워드를 사용하지 않고 let과 const 키워드만을 사용해 변수 및 함수를 생성할 것.
 */
let num1 = 100;
// let num1 = 10; // 오류 발생

console.log(num1);

var num2 = 10;
var num2 = 100; // 오류 발생하지 않음.

console.log(num2);
