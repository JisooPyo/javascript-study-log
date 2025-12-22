// node ./server/server.js
// console.log("hello");

// node.js의 프레임워크인 express 모듈 불러오기
const express = require("express");

// 파일 시스템의 경로를 다루기 위해 사용되는 path 모듈 불러오기
const path = require("path");

// express 함수를 호출해서 express 애플리케이션 객체를 생성
const app = express();

// 서버가 계속해서 듣고 있을 포트 번호 설정
const PORT = 3000;

// Express 애플리케이션에 미들웨어 추가
// 미들웨어:
// 클라이언트의 요청(Request)과 서버의 응답(Response) 사이에서 동작하는 함수,
// - 요청 객체(req)와 응답 객체(res)를 수정하거나,
// - 요청을 처리하여 응답을 반환하거나,
// - 다음 미들웨어로 요청을 전달하는 역할을 한다.
//
// express.static: 정적 파일을 제공하기 위한 미들웨어
// 지정한 디렉토리 안의 파일들을 브라우저에서 직접 접근할 수 있도록 해준다.
app.use(express.static(path.join(__dirname, "..")));

// app.get(경로, 콜백 함수)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log("START SERVER");
});
