/**
 * 미션2. DOM API & Select Tag
 *
 * id가 app인 div요소의 내부에 아래의 코드를을 넣어주세요.
 * (단, createElement, appendChild를 사용해서 생성해주세요,
 * select 태그의 값을 변경할 때 마다 변경된 값을 출력하는 기능도 작성해주세요)
 */

{
  /* <select id="skills">
    <option value="javascript">Javascript</option>
    <option value="next">Next.js</option>
    <option value="react">React.js</option>
    <option value="typescript">TypeScript</option>
</select> */
}

let $app = document.getElementById("app");

let $select = document.createElement("select");
$select.id = "skills";

let $option1 = document.createElement("option");
$option1.value = "javascript";
$option1.textContent = "Javascript";

let $option2 = document.createElement("option");
$option2.value = "next";
$option2.textContent = "Next.js";

let $option3 = document.createElement("option");
$option3.value = "react";
$option3.textContent = "React.js";

let $option4 = document.createElement("option");
$option4.value = "typescript";
$option4.textContent = "TypeScript";

$select.appendChild($option1);
$select.appendChild($option2);
$select.appendChild($option3);
$select.appendChild($option4);

$app.appendChild($select);

$select.addEventListener("change", (event) => {
  console.log("select 값: ", event.target.value);
});
