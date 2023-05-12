const express = require('express') // 설치한 라이브러리를 첨부해 주세요~
const app = express() // 첨부한 라이브러리로 객체를 만들어 주세요~

app.listen(8080, function () {
  console.log('listening on 8080')
}) // 8080 port로 웹 서버를 열고 잘 열리면 'listening on 8080'을 출력해주세요~

// 누군가가 /pet으로 방문을 하면
// pet 관련된 안내문을 띄워준다.
app.get('/pet', function (요청, 응답) {
  응답.send('펫 용품을 쇼핑할 수 있는 페이지입니다.')
})

// 숙제: 누군가 /beauty URL로 접속하면(GET 요청) 안내문을 띄워준다.
app.get('/beauty', function (req, res) {
  res.send('뷰티용품 쇼핑 페이지임')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
