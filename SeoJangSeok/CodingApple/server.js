const express = require('express') // 설치한 라이브러리를 첨부해 주세요~
const app = express() // 첨부한 라이브러리로 객체를 만들어 주세요~

const bodyParser = require('body-parser') // 2021년 이후 설치한 프로젝트들은 body-parser 라이브러리가 express에 기본 포함되어있다. 따로 npm 설치할 필요X
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect(
  'mongodb+srv://admin:1234@cluster0.0eg5qio.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp')

    db.collection('post').insertOne(
      { _id: 102, 이름: 'SJS', 나이: 24 },
      function (에러, 결과) {
        console.log('저장완료')
      }
    )
    //서버띄우는 코드 여기로 옮기기
    app.listen(8080, function () {
      console.log('listening on 8080')
    }) // 8080 port로 웹 서버를 열고 잘 열리면 'listening on 8080'을 출력해주세요~
  }
)

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

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html')
})

app.get('/list', function (req, res) {
  db.collection('post')
    .find()
    .toArray(function (에러, 결과) {
      console.log(결과)
      res.render('list.ejs', { posts: 결과 })
    })
})

app.post('/add', function (req, res) {
  console.log(req.body.title)
  console.log(req.body.date)
  res.send('전송완료')
  db.collection('post').insertOne(
    {
      _id: 101,
      제목: req.body.title,
      날짜: req.body.date,
    },
    function () {
      console.log('저장완료')
    }
  )
})
