const express = require("express"); // express 모듈 요청
const ejs = require("ejs"); // ejs 모듈 요청
const app = express();

app.set("view engine", "ejs"); // app에 view engine 설치, ejs 템플릿으로
app.use(express.static(__dirname + '/')); // views 폴더 경로는 프로젝트 폴더.(__dirname이 폴더 위치)

app.get('/login.ejs', (req, res) => {
  res.render('login'); // Assuming "login.ejs" is in the views directory
})

app.get('/forgot-password.ejs', (req, res) => {
  res.render('forgot-password'); // Assuming "forgot-password.ejs" is in the views directory
});

app.get('/create-account.ejs', (req, res) => {
  res.render('create-account'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/buttons.ejs', (req, res) => {
  res.render('buttons'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/forms.ejs', (req, res) => {
  res.render('forms'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/cards.ejs', (req, res) => {
  res.render('cards'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/charts.ejs', (req, res) => {
  res.render('charts'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/modals.ejs', (req, res) => {
  res.render('modals'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/index.ejs', (req, res) => {
  res.render('index'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/login.ejs', (req, res) => {
  res.render('login'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/forgot-password', (req, res) => {
  res.render('forgot-password'); // Assuming "create-account.ejs" is in the views directory
});

app.get('/create-account', (req, res) => {
  res.render('create-account'); // Assuming "create-account.ejs" is in the views directory
});

app.listen(3000, function() {
  console.log("실행 중...");
});