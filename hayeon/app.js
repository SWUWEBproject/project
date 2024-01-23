

const express = require("express"); // express 모듈 요청
const ejs = require("ejs"); // ejs 모듈 요청
const app = express();

app.set("view engine", "ejs"); // app에 view engine 설치, ejs 템플릿으로
app.use(express.static(__dirname + '/')); // views 폴더 경로는 프로젝트 폴더.(__dirname이 폴더 위치)

app.get("/board_detail.ejs", function(req, res) {

    console.log("테스트 페이지!");

    res.render("board_detail", {});

})

app.get("/board_write.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("board_write", {});

})

app.get("/board.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("board", {});

})

app.listen(3000, function() {
  console.log("실행중...");
});

