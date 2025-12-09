function checkAdult(age) {
  let isAdult = age >= 18;

  switch (isAdult) {
    case true:
      console.log("성인입니다.");
      break;
    default:
      console.log("미성년자입니다.");
  }
}

checkAdult(20);
checkAdult(18);
checkAdult(16);

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("잘못된 연산자를 입력하였습니다.");
  }
}

calculate(10, 5, "+"); // 15
calculate(10, 5, "*"); // 50
