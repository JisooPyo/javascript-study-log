/* 1️⃣ 개념정리: 동기(Synchronous) vs 비동기(Asynchronous) */

/**
 * 동기(Synchronous)
 * - 하나의 작업이 완전히 끝날 때까지 다음 작업을 실행하지 않는 방식
 * - 모든 작업이 순차적으로(blocking) 실행됨
 * - 이전 작업이 오래 걸리면 이후 작업도 그대로 대기해야 함
 */

// 동기적인 코드 예시
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// → 항상 1 → 2 → 3 → 4 순서로 실행

/**
 * 비동기(Asynchronous)
 * - 어떤 작업이 끝나기를 기다리지 않고 다음 작업을 실행하는 방식
 * - 여러 작업이 동시에 실행되는 것처럼 보임 📌
 * - 자바스크립트는 싱글 스레드
 * - 비동기 처리를 지원하는 런타임 구조 덕분에 멀티 스레드처럼 동작하는 것처럼 보임
 */

/* 2️⃣ 함수 호출 기준의 동기 실행 예시 */

const work1 = () => console.log("work1");
const work2 = () => console.log("work2");
const work3 = () => console.log("work3");

// 동기 실행
work1();
work2();
work3();
// → 항상 work1 → work2 → work3 순서
// 함수가 비동기 API를 사용하지 않는 한, 함수 호출 자체는 기본적으로 동기

/* 3️⃣ 왜 비동기가 필요한가? */

/**
 * Work A: 5초
 * Work B: 3초
 * Work C: 10초
 *
 * - 동기 처리
 *   - A → B → C
 *   - 총 소요 시간: 18초
 *
 * - 비동기 처리
 *   - A, B, C를 동시에 시작
 *   - 총 소요 시간: 가장 오래 걸리는 10초
 * ➡️ 같은 작업을 더 빠르게 처리 가능
 */

/* 4️⃣ 실제 웹에서의 비동기 필요성 */

/**
 * 이미지 로딩, API 호출, 파일 다운로드 등은 시간이 오래 걸림
 * - 모든 것을 동기로 처리하면:
 *   - 화면이 아무것도 안 보이는 시간이 길어짐
 *   - 사용자는 "에러인가?"라고 인식함
 * - 비동기로 처리하면:
 *   - 텍스트 먼저 표시
 *   - 이미지 나중에 표시
 *   - UX가 훨씬 좋아짐
 */

/* 5️⃣ JavaScript의 기본 비동기 방식: setTimeout */

// 📌 기본 구조

// setTimeout(콜백함수, 지연시간(ms));

// 📌 비동기 실행 예시

setTimeout(() => {
  console.log("비동기1");
}, 3000);
console.log("종료1");

// 출력 순서: 종료1 → (3초 후) → 비동기1
// 이유: setTimeout은 예약만 하고 바로 다음 코드 실행, 콜백은 나중에 이벤트 루프에 의해 실행됨

// 📌 비동기 작업 이후에 후속 작업을 실행하고 싶을 때
setTimeout(() => {
  console.log("비동기2");
  console.log("종료2");
}, 3000);
// 같은 콜백 안에 넣으면 순서를 보장할 수 있음

/* 6️⃣ 콜백을 이용한 비동기 흐름 제어 */

const work = (callback) => {
  setTimeout(() => {
    console.log("비동기3");
    callback(); // 비동기 작업이 끝난 후 실행
  }, 3000);
};

work(() => {
  console.log("종료3");
});

// 작업이 끝난 시점에 callback을 직접 호출 → "비동기 작업 완료 후 실행할 로직"을 전달하는 방식
// 이 패턴이 나중에 Promise, async/await 로 발전하게 됨

/* 7️⃣ 여러 비동기 작업이 있을 때 실행 순서 */

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};
const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};
const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

const workD = () => {
  console.log("workD");
};

workA();
workB();
workC();
workD();

// 실제 출력 순서:
// workD    // 즉시 실행(동기)
// workB    // 3초 후
// workA    // 5초 후
// workC    // 10초 후
