const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect(
  'mongodb+srv://audwls714:myongjin714@mj00.anmafpi.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db('todoapp');

    app.listen(8080, function () {
      console.log('listening on 8080');
    });
  }
);
app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});

app.get('/write', function (요청, 응답) {
  응답.sendFile(__dirname + '/write.html');
});

app.get('/list', function (req, res) {
  db.collection('post')
    .find()
    .toArray(function (error, result) {
      console.log(result);
      res.render('list.ejs', { posts: result });
    });
});

app.post('/add', function (요청, 응답) {
  db.collection('counter').findOne(
    { name: '게시물갯수' },
    function (에러, 결과) {
      var 총게시물갯수 = 결과.totalPost;

      db.collection('post').insertOne(
        { _id: 총게시물갯수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date },
        function (에러, 결과) {
          db.collection('counter').updateOne(
            { name: '게시물갯수' },
            { $inc: { totalPost: 1 } },
            function (에러, 결과) {
              if (에러) {
                return console.log(에러);
              }
              응답.send('전송완료');
            }
          );
        }
      );
    }
  );
});

app.use(express.urlencoded({ extended: true }));
