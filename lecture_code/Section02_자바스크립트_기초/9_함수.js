function add(num1, num2) {
  return num1 + num2;
}

let result = add(10, 15);

console.log(`두 숫자를 더한 결과는 ${result}입니다.`);

// early return pattern
function compare(num) {
  if (num === 0) return "num은 0";
  if (num < 0) return "num은 음수";
  if (num >= 10) return "num은 10 이상";
  return "num은 10 미만의 양수";
}

console.log(compare(-1));
console.log(compare(0));
console.log(compare(1));
console.log(compare(10));

// 함수 호출
function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
