/**
 * 미션1. 함수 스코프와 호이스팅의 상호작용
 * 다음 코드를 실행했을 때 콘솔에 찍히는 값을 순서대로 적어보세요.
 *
 * 답: undefined, 2, 1
 *
 * test()가 호출되었으므로 test()를 살펴보면
 *
 * test() 안에서 var x 가 선언되어 있기 때문에 var x는 호이스팅된다.
 * 이 때 선먼만 된 상태이므로 test()의 첫 줄의 console.log(x)는 undefined가 출력된다.(이 x는 전역 변수 x가 아님)
 * var x = 2;에서 var x 가 초기화가 진행되고
 * test()의 세번째 줄의 console.log(x)는 2가 출력된다.
 *
 * test() 바깥의 console.log(x);에서는 전역변수 x(= 1)이 적용되므로 1이 출력된다.
 */

let x = 1;

function test() {
  console.log(x);
  var x = 2;
  console.log(x);
}

test();
console.log(x);

/**
 * 미션2. 객체 메서드와 화살표 함수 사용하기
 * 다음 조건을 만족하는 코드를 직접 작성해보세요.
 *
 * person 객체를 만든다.
 * name 속성에 "효빈"을 저장한다.
 * sayName이라는 일반 함수 메서드를 만든다.
 * run이라는 화살표 함수를 만든다.
 * run()을 호출하면 person.sayName()을 실행해야한다.
 */

let person = {
  name: "효빈",
  sayName: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
  run: () => {
    // this.sayName();    // 오류 발생: 화살표 함수의 this는 가장 바깥에 있는 글로벌 객체를 가리키기 때문
    person.sayName();
  },
};

person.run();
