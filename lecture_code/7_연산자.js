/**
 * 연산자의 종류:
 * 산술 연산자, 대입 연산자, null 병합 연산자, 논리 연산자, 비교 연산자, 삼항 연산자, 연결 연산자
 *
 * 산술 연산자: +, -, *, /, %
 *   - 후위연산: num++, num--
 *   - 전위연산: ++num, --num
 *
 * 대입 연산자: =
 *   - 복합 대입 연ㅅ나자, +=, -=, *=, /=, %=
 *
 * 논리 연산자: !, ||, &&
 */

/* 비교 연산자 */
let num1 = 15;
let num2 = "15";

// ===: 값 & 자료형 일치
console.log(num1 === num2); // false
// ==: 값 일치
console.log(num1 == num2); // true

// !==: 값 불일치 || 자료형 불일치
console.log(num1 !== num2); // true
// !=: 값 불일치
console.log(num1 != num2); // false

/* 연결 연산자 */
let price = 10000;
console.log("가격: " + price + "원");

/* null 병합 연산자 */
// ??
// 변수에 기본값을 할당하고 싶을 때
// 기호를 기준으로 왼쪽에 있는 값이:
//   - null이거나 undefined일 경우 기호의 오른쪽에 있는 값을 반환.
//   - null이거나 undefined가 아닐 경우 기호의 왼쪽에 있는 값을 반환.
let num3;
let num4 = 10;

console.log(num3 ?? 20); // 20
console.log(num4 ?? 20); // 10

/* 삼항 연산자 */
// A ? B : C

let num = 100;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result);
