/**
 * 미션1. DOM API
 *
 * index.js 파일을 생성하고,
 * 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.
 * DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.
 */
let $text = document.getElementById("text");
let $button = document.getElementById("changeTextButton");

$button.addEventListener("click", () => {
  $text.textContent = "새로운 텍스트";
});
