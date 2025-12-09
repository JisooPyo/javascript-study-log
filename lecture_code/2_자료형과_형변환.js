/**
 * 자료형 - 원시 타입과 비 원시 타입
 *
 * 원시 타입:
 * 한 번에 하나의 값을 가지고 있는 변수 타입
 * (ex. number, null, Bigint, undefined, string, symbol, boolean)
 * 
 * 비 원시 타입:
 * 한 번에 여러 개의 값을 가질 수 있는 변수 타입
 * (ex. 객체)

 */

// typeof: JavaScript에서 기본적으로 제공하는 연산자로 특정 변수의 자료형을 결과값으로 반환하는 연산자

/* 숫자형 */
let num1 = 125;
console.log("num1 type: " + typeof num1); // 정수: number

let num2 = 10.00012;
console.log("num2 type: " + typeof num2); // 소수: number

let num3 = Infinity;
console.log("num3 type: " + typeof num3); // Infinity: number

let num = 100 / 0;
console.log("num: " + num); // Infinity

// NaN: Not a Number. 문자열을 숫자로 나누는 것과 같이 부정확한 연산을 하는 경우
let number = NaN; // not a number
console.log(typeof number); // NaN: number

let number2 = "javascript" / 10;
console.log(number2); // NaN

// JavaScript는 다른 언어들과 다르게 부정확한 연산을 하거나 0으로 나누는 연산을 하더라도 에러가 발생하지 않고 Infinity와 NaN이라는 값을 반환하기 때문에
// 자바스크립트의 숫자 연산은 안전하다고 표현하기도 한다.

/* BigInt */
// 2^53-1보다 크거나 -(2^53-1)보다 작은 정수
let bigNum1 = 999999999999999999999999999999999999999999999999999999n;
let bigNum2 = BigInt("999999999999999999999999999999999999999999999999999999");

console.log(typeof bigNum1); // bigint
console.log(typeof bigNum2); // bigint

/* String */
let myName = "jisoo";
// ${}: 템플릿 리터럴
let intro = `제 이름은 ${myName}입니다.`; // 백틱
console.log(typeof myName);
console.log(intro);

/* Boolean */
// true or false
let isClicked = false;
console.log("isClicked type: " + typeof isClicked);

/* Null */
let nullVariable = null;
console.log("nullVariable type: " + typeof nullVariable); // object
// ===: 왼쪽에 작성한 값과 오른쪽에 작성한 값이 동일한지 비교하는 연산자
console.log("nullVariable: " + (nullVariable === null)); // true

/* Undefined */
// 값이 할당되지 않은 상태
let undefinedVariable;
console.log("undefinedVariable type: " + typeof undefinedVariable);

// JavaScript가 다른 프로그래밍 언어와는 다르게 변수 선언 시 변수의 자료형을 미리 작성하지 않는 이유:
// JavaScript는 프로그램 실행 중에 자료형이 변환되는 언어이기 때문.
// JavaScript는 동적 타입 언어

/* 형 변환 */
// 묵시적 형 변환
let num15 = "15";
let num5 = 5;
console.log("num15 / num5 = " + num15 / num5); // 3

// 명시적 형 변환
let num15_2 = "15";
let num5_2 = 5;
console.log("(묵시적)num15_2 + num5_2 = " + (num15_2 + num5_2)); // 155
console.log("(명시적)num15_2 + num5_2 = " + (parseInt(num15_2) + num5_2)); // 20
