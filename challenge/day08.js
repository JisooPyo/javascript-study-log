/**
 * 미션1. 자바스크립트의 this
 *
 * 다음 코드에서 regularFunction과 arrowFunction이 있습니다.
 * 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.
 * 각 함수의 this가 무엇을 가리키는지 확인하고,
 * 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요.
 * (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!)
 */

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    /**
     * 👉 화살표 함수가 아닌 함수에서
     * 메서드 호출 시 this는 "해당 메서드를 호출한 객체"를 가리킴. 즉 obj
     */
  },
  //   arrowFunction: () => {
  //     console.log(this.value); // 여기서 this는 무엇을 가리키나요?
  //     /**
  //      * 👉 화살표 함수의 this는 호출 방식이 아니라 선언 시점의 상위 스코프로 결정되므로
  //      * 여기서의 this는 window를 가리킨다.
  //      */
  //   },
  /**
   * 👉 arrowFunction을 화살표 함수로 바꾸면 obj의 value인 42를 출력한다.
   */
  arrowFunction: function () {
    console.log(this.value);
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
// 👉 window의 value값은 정의되어 있지 않으므로 undefined.
