/**
 * async / await
 *
 * [1] async
 * - 함수 앞에 붙이는 키워드
 * - async 함수는 "항상 Promise를 반환"한다.
 *   - return 123;            => Promise.resolve(123)
 *   - throw new Error("x");  => Promise.reject(Error("x"))
 *
 * [2] await
 * - async 함수 내부에서만 사용 가능
 * - Promise가 "처리(fulfilled/rejected)될 때까지" 해당 줄의 실행을 기다린다.
 * - ⚠️ '프로그램 전체'가 멈추는 게 아니라, "그 async 함수의 나머지 실행"이 잠시 멈췄다가(중단됐다가) Promise 완료 후 이어진다.
 *
 * [await 사용 목적]
 * - then/catch 체이닝 대신, 동기 코드처럼 읽히는 형태로 비동기 흐름을 작성
 * - try/catch로 에러 처리를 직관적으로 할 수 있음
 *
 * [3] Promise.all(iterable)
 * - 여러 Promise를 "병렬로" 시작해 두고, 전부 성공할 때까지 기다린다.
 * - 모두 성공하면: 결과 배열을 반환(입력 순서 유지)
 * - 하나라도 실패하면: 즉시 reject(가장 먼저 reject된 에러로 실패)
 *
 * [Promise.all 사용 목적]
 * - 서로 의존하지 않는 여러 비동기 작업을 "동시에" 실행해 총 시간을 줄임
 * - 예: API 3개를 순차로 호출하면 18초 걸릴 일을, 병렬로 10초에 끝내기
 */

/* ------------------------------------------------------------
 * 0) 공통 유틸: delay(ms)
 * - ms 후 resolve 되는 Promise를 반환
 * ------------------------------------------------------------ */
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms / 1000}초가 지났습니다.`);
    }, ms);
  });
};

/* ------------------------------------------------------------
 * 1) Promise then() 사용 예시
 * - delay()는 Promise를 반환하므로 then으로 결과를 받는다.
 * ------------------------------------------------------------ */
const startThen = () => {
  delay(3000).then((res) => {
    console.log("[startThen]", res);
  });

  // then을 쓰면, 아래 로그는 delay 완료를 기다리지 않고 먼저 실행됨
  console.log("[startThen] scheduled");
};

startThen();

/* ------------------------------------------------------------
 * 2) async 함수의 반환값: 항상 Promise
 * - 내부에서 await를 쓰지 않아도 async 자체가 Promise를 반환한다.
 * ------------------------------------------------------------ */
const startAsync = async () => {
  // 여기서도 then을 쓸 수는 있지만,
  // async를 쓰는 목적은 보통 await를 통해 더 깔끔하게 쓰는 것
  delay(3000).then((res) => console.log("[startAsync]", res));

  // async 함수의 반환값은 Promise
  return "async function return value";
};

// async 함수가 Promise를 반환한다는 것을 확인
startAsync().then((v) => console.log("[startAsync return]", v));

/* ------------------------------------------------------------
 * 3) await 사용 예시
 * - await는 Promise가 완료될 때까지 "이 async 함수의 다음 줄"을 기다린다.
 * - try/catch로 reject(에러)를 처리한다.
 * ------------------------------------------------------------ */
const startAsyncAwait = async () => {
  try {
    const result = await delay(3000); // 3초 기다린 후 result에 값이 들어옴
    console.log("[startAsyncAwait]", result);
  } catch (error) {
    // await 대상 Promise가 reject되면 여기로 온다.
    console.error("[startAsyncAwait error]", error);
  } finally {
    // 성공/실패와 무관하게 항상 실행됨
    console.log("[startAsyncAwait] done");
  }
};

startAsyncAwait();

/* ------------------------------------------------------------
 * 4) 예제 작업들: 서로 다른 시간이 걸리는 비동기 함수들
 * - workA: 5초, workB: 3초, workC: 10초
 * - 각각 Promise를 반환 (resolve만 있는 성공 케이스)
 * ------------------------------------------------------------ */
const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("workA"), 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("workB"), 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("workC"), 10000);
  });
};

/* ------------------------------------------------------------
 * 5) await로 "순차 실행" (총 18초)
 * - await를 연달아 쓰면, 앞 작업이 끝난 뒤 다음 작업을 시작한다.
 * - 실행 시간 = 5초 + 3초 + 10초 = 18초
 * ------------------------------------------------------------ */
const startWorkSequential = async () => {
  try {
    console.time("[sequential total time]");

    const resultA = await workA(); // 5초 후
    const resultB = await workB(); // 그 다음 3초
    const resultC = await workC(); // 그 다음 10초

    console.log("[sequential]", resultA);
    console.log("[sequential]", resultB);
    console.log("[sequential]", resultC);

    console.timeEnd("[sequential total time]");
  } catch (err) {
    console.error("[sequential error]", err);
  }
};

startWorkSequential();

/* ------------------------------------------------------------
 * 6) Promise.all로 "병렬 실행" (총 10초)
 * - workA/B/C를 즉시 모두 시작해두고, 전부 끝날 때까지 기다린다.
 * - 실행 시간 = max(5초, 3초, 10초) = 10초
 *
 * - Promise.all 결과는 "입력 순서"를 그대로 유지한다.
 *   예: [workA(), workB(), workC()] => ["workA", "workB", "workC"]
 *
 * - 하나라도 reject되면 Promise.all 전체가 reject된다.
 * ------------------------------------------------------------ */
const startWorkParallel = async () => {
  try {
    console.time("[Promise.all total time]");

    const results = await Promise.all([workA(), workB(), workC()]);

    // results는 배열
    results.forEach((res) => console.log("[Promise.all]", res));

    console.timeEnd("[Promise.all total time]");
  } catch (err) {
    // 세 작업 중 하나라도 실패(reject)하면 여기로 온다.
    console.error("[Promise.all error]", err);
  }
};

startWorkParallel();
