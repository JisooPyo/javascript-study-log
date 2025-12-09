// if
let num = 15;
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else if (num > 10) {
  console.log("num은 10보다 큽니다.");
} else {
  console.log("num은 10입니다.");
}

// switch case
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("바나나");
    break;

  case "orange":
    console.log("오렌지");
    break;

  case "apple":
    console.log("사과");
    break;

  case "grape":
    console.log("포도");
    break;

  default:
    console.log("다른 과일");
}
