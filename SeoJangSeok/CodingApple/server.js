const express = require('express') // 설치한 express 라이브러리를 첨부해 주세요~
const app = express() // 첨부한 라이브러리로 객체를 만들어 주세요~
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser') // 2021년 이후 설치한 프로젝트들은 body-parser 라이브러리가 express에 기본 포함되어있다. 따로 npm 설치할 필요X
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('public'))

var db
MongoClient.connect(
  'mongodb+srv://admin:1234@cluster0.0eg5qio.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp') // todoapp이라는 DB에 접속하라는 명령.

    //서버띄우는 코드 여기로 옮기기
    app.listen(8080, function () {
      console.log('listening on 8080')
    }) // 8080 port로 웹 서버를 열고 잘 열리면 'listening on 8080'을 출력해주세요~
  }
)

// 홈페이지
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
// 할일 작성페이지
app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html') // .sendFile(보낼 파일 경로), __dirname : 현재 파일 경로를 뜻한다.
})
// /list GET 요청시,
app.get('/list', function (req, res) {
  db.collection('post')
    .find() // .find().toArray() : collection('post')에 있는 데이터를 Array로 가져온다.
    .toArray(function (error, result) {
      console.log(result)
      res.render('list.ejs', { posts: result })
    })
})

app.post('/add', function (req, res) {
  res.send('전송 완료!')
  db.collection('counter').findOne(
    { name: '게시물갯수' },
    function (error, result) {
      console.log(result.totalPost)
      var 총게시물갯수 = result.totalPost
      db.collection('post').insertOne(
        { _id: 총게시물갯수 + 1, 제목: req.body.title, 날짜: req.body.date },
        function (error, result) {
          console.log('saved!')
          db.collection('counter').updateOne(
            { name: '게시물갯수' },
            { $inc: { totalPost: 1 } },
            function (error, result) {
              if (error) {
                return console.log(error)
              }
            }
          )
        }
      )
    }
  )
})

app.delete('/delete', function (req, res) {
  req.body._id = parseInt(req.body._id)
  db.collection('post').deleteOne(req.body, function (error, result) {
    console.log('삭제완료')
  })
  res.send('삭제완료')
})

app.get('/detail/:id', function (req, res) {
  db.collection('post').findOne(
    { _id: parseInt(req.params.id) },
    function (error, result) {
      console.log(result)
      res.render('detail.ejs', { data: result })
    }
  )
})
