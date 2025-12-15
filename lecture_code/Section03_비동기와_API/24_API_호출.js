/**
 * API 호출
 *
 * [fetch() 기본 개념]
 * - fetch(url)는 "즉시 HTTP 요청을 시작"하고 결과로 Promise<Response> 객체를 반환한다.
 *
 * - fetch 자체는 네트워크 요청이 실패해도(reject) "네트워크 오류"가 아닌 이상 reject되지 않는다.
 * - HTTP 상태 코드(404, 500 등)는 Response 객체 안에서 확인해야 한다.
 *
 * ------------------------------------------------------------
 * Response 객체 주요 메서드
 * ------------------------------------------------------------
 * - response.json()  : 응답 body를 JSON으로 파싱 (Promise 반환)
 * - response.ok      : HTTP 상태 코드가 200~299 인지 여부 (boolean)
 * - response.status  : HTTP 상태 코드
 */

/* ------------------------------------------------------------
 * 1️⃣ fetch()의 반환값 확인
 * ------------------------------------------------------------ */

// fetch는 Promise<Response>를 반환한다.
const response1 = fetch("https://jsonplaceholder.typicode.com/users");

// 아직 네트워크 요청이 끝나지 않았기 때문에 Promise 상태로 출력됨
console.log(response1);

/* ------------------------------------------------------------
 * 2️⃣ then / catch 방식으로 fetch 결과 처리
 * ------------------------------------------------------------ */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // response는 HTTP 응답 정보를 담은 Response 객체
    console.log("[then] response:", response);

    // JSON 데이터를 사용하려면 반드시 response.json() 호출 필요
    // response.json() 역시 Promise를 반환
    return response.json();
  })
  .then((data) => {
    // 파싱된 실제 데이터
    console.log("[then] data:", data);
  })
  .catch((error) => {
    // 네트워크 에러 등으로 fetch 자체가 실패한 경우
    console.error("[then] error:", error);
  });

/* ------------------------------------------------------------
 * 3️⃣ async / await 방식으로 fetch 사용
 * ------------------------------------------------------------
 * - then 체이닝보다 읽기 쉽고
 * - 동기 코드처럼 위에서 아래로 흐름을 파악할 수 있다.
 */

const getData = async () => {
  // fetch가 반환하는 Promise가 완료될 때까지 기다림
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // response.json() 역시 Promise이므로 await 필요
  const data = await response.json();

  console.log("[async/await] data:", data);
};

getData();

/* ------------------------------------------------------------
 * 4️⃣ async / await + try / catch
 * ------------------------------------------------------------
 * - await 사용 시 에러 처리는 try / catch로 하는 것이 기본 패턴
 * - 가독성과 에러 흐름 파악이 가장 좋음
 */

const getDataTryCatch = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // HTTP 에러를 직접 처리하고 싶다면 response.ok 체크
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("[try/catch] data:", data);
  } catch (error) {
    // 네트워크 오류, JSON 파싱 오류, 직접 throw한 에러 등
    console.error("[try/catch] error:", error);
  } finally {
    // 성공/실패와 무관하게 항상 실행됨
    console.log("[try/catch] request finished");
  }
};

getDataTryCatch();
