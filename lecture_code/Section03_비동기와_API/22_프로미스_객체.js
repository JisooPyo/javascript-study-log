/**
 * 프로미스(Promise)란?
 *
 * - 비동기 작업의 최종 성공/실패 결과를 미래에 제공하는 객체
 * - 콜백 지옥을 완화하고, 비동기 흐름을 읽기 쉽게 만든다
 */

// ------------------------------------
// 1️⃣ Promise 생성 기본 형태
// ------------------------------------

// executor: Promise 생성 시 "즉시 실행"되는 함수
// resolve: 성공 처리(fulfilled로 변경)
// reject: 실패 처리(rejected로 변경)
const executor = (resolve, reject) => {
  // 작업을 수행하고
  // 성공하면 resolve(value), 실패하면 reject(error)를 호출
};

const promise = new Promise(executor);

/**
 * Promise의 상태 변화
 * - pending (대기)
 * - fulfilled (성공, resolve 호출)
 * - rejected (실패, reject 호출)
 */

// ------------------------------------
// 2️⃣ resolve / reject 예시
// ------------------------------------

const executor1 = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공"); // 3초 후 성공 처리
    reject("실패"); // 이미 resolve 되었으므로 이 코드는 무시됨
  }, 3000);
};

const promise1 = new Promise(executor1);

// then(성공 콜백, 실패 콜백) 형태도 가능
promise1.then(
  (result) => {
    console.log("then success:", result);
  },
  (error) => {
    console.log("then error:", error);
  }
);

// 일반적으로는 then().catch() 형태를 더 많이 사용
promise1
  .then((result) => {
    console.log("then success:", result);
  })
  .catch((error) => {
    console.log("catch error:", error);
  });

// ------------------------------------
// 3️⃣ 콜백 지옥 예시 (Callback Hell)
// ------------------------------------

/**
 * 콜백 지옥 vs Promise 체이닝
 *
 * 콜백 지옥
 *   - 비동기 결과를 다음 비동기 함수에 전달하려고 콜백 안에 콜백이 중첩됨
 *   - 들여쓰기가 깊어지고 에러 처리도 복잡해짐
 *
 * Promise 체이닝
 *   - then()에서 다음 Promise를 return하여 연결
 *   - 코드가 아래로 "직선"처럼 이어져 읽기 쉬움
 *   - 에러 처리는 catch() 하나로 묶기 쉬움
 */

// 콜백 기반 비동기 함수 3개
const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5); // 5초 후 결과 전달
  }, 5000);
};

const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3); // 3초 후 결과 전달
  }, 3000);
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10); // 10초 후 결과 전달
  }, 10000);
};

// 원하는 순서대로 실행하려면 콜백이 중첩되며 들여쓰기가 깊어짐
workA(10, (resA) => {
  console.log(`workA : ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB : ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});

// ------------------------------------
// 4️⃣ Promise로 바꾼 비동기 함수들
// ------------------------------------

// Promise를 반환하도록 만들면, 결과를 then으로 받을 수 있음
const work1 = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
};

const work2 = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
};

const work3 = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
};

// ❌ 아래 코드는 Promise를 썼지만 여전히 "중첩 then"이라 모양이 콜백지옥과 비슷해질 수 있음
work1(10).then((res1) => {
  console.log(`work1: ${res1}`);
  work2(res1).then((res2) => {
    console.log(`work2: ${res2}`);
    work3(res2).then((res3) => {
      console.log(`work3: ${res3}`);
    });
  });
});

// ✅ Promise 체이닝: then에서 다음 Promise를 "return"해서 연결
work1(10)
  .then((res1) => {
    console.log(`work1 : ${res1}`);
    return work2(res1); // 다음 Promise를 반환해야 체이닝됨
  })
  .then((res2) => {
    console.log(`work2 : ${res2}`);
    return work3(res2);
  })
  .then((res3) => {
    console.log(`work3 : ${res3}`);
  })
  .catch((error) => {
    // 체이닝 중 어느 단계에서 에러가 나도 여기서 한 번에 처리 가능
    console.error("error:", error);
  });
