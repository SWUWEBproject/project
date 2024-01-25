const express = require("express"); // express 모듈 요청
const ejs = require("ejs"); // ejs 모듈 요청
const app = express();

app.set("view engine", "ejs"); // app에 view engine 설치, ejs 템플릿으로
app.use(express.static(__dirname + '/')); // views 폴더 경로는 프로젝트 폴더.(dirname이 폴더 위치)

app.get("/groupmanagers.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("groupmanagers", {});

})

app.get("/smallgroupsettings.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("smallgroupsettings", {});

})

app.get("/groupsettings.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("groupsettings", {});

})

app.get("/smallgrouplists.ejs", function(req, res) {

  console.log("테스트 페이지!");

  res.render("smallgrouplists", {});

})

app.get('/login.ejs', (req, res) => {
  
  console.log("테스트 페이지!");
  
  res.render('login'); // Assuming "login.ejs" is in the views directory
})

app.get('/forgot-password.ejs', (req, res) => {
  
  console.log("테스트 페이지!");
  
  res.render('forgot-password'); // Assuming "forgot-password.ejs" is in the views directory
});

app.listen(3000, function() {
  console.log("실행중...");
});