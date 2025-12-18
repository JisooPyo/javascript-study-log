// 이 파일이 <script type="module">로 로드되지 않으면
// 다른 스크립트들과 전역 스코프(window)를 공유하게 되어
// 동일한 변수명이 있을 경우 중복 선언 에러가 발생한다.
// 모듈로 로드되면 각 파일은 독립적인 모듈 스코프를 가지므로 에러가 발생하지 않는다.
let num = 10;

console.log(num);

export const num2 = 35;

export function add(num1, num2) {
  return num1 + num2;
}

export function User(name) {
  this.name = name;
}

// export { num2, add, User };
// export default User;
