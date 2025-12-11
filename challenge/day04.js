/**
 * 미션1. 상품 목록을 생성하고 가장 비싼 상품 찾기
 * 반목문을 사용해 배열에서 가장 가격이 높은 상품 객체를 찾아보고, 마지막에 가장 비싼 상품의 이름을 출력하세요.
 */

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product("모니터", 300000),
  new Product("키보드", 50000),
  new Product("노트북", 1200000),
];

let mostValuable = products[0];

products.forEach((product) => {
  if (product.price > mostValuable.price) {
    mostValuable = product;
  }
});

console.log(`products에서 가장 비싼 상품의 이름은 ${mostValuable.name}입니다.`);

/**
 * 미션2. 과일 목록을 분석하는 프로그램 만들기
 * 다음과 같은 배열이 있을 때, 아래의 요구사항을 만족하는 코드를 각각 작성하세요.
 */

const fruits = ["사과", "바나나", "포도", "사과", "체리", "바나나", "망고"];

// forEach를 사용해 모든 과일 이름을 한 줄씩 출력하세요
fruits.forEach((fruit) => console.log(fruit));

// includes를 사용하여 "망고"가 배열 안에 있는지 확인하고 결과를 출력하세요
let existMango = fruits.includes("망고");
console.log(existMango); // true

// findIndex를 사용해 "포도"가 처음 등장하는 위치(index)를 구해 출력하세요
let indexOfGrape = fruits.findIndex((fruit) => fruit === "포도");
console.log(indexOfGrape); // 2

// filter를 사용해 "사과"만 모아 새로운 배열을 만들고 출력하세요
let appleArray = fruits.filter((fruit) => fruit === "사과");
console.log(appleArray); // ['사과', '사과']

// slice를 사용해 배열에서 앞 요소 3개만 잘라 새로운 배열을 만들고 출력하세요
let slicedArray = fruits.slice(0, 3);
console.log(slicedArray); // ['사과', '바나나', '포도']
