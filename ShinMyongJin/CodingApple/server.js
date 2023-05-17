const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

var db;
MongoClient.connect(
  'mongodb+srv://audwls714:myongjin714@mj00.anmafpi.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db('todoapp');

    db.collection('post').insertOne(
      { 이름: 'MJ', _id: 200 },
      function (에러, 결과) {
        console.log('저장완료');
      }
    );

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

app.get('/edit/:id', function (요청, 응답) {
  db.collection('post').findOne(
    { _id: parseInt(요청.params.id) },
    function (에러, 결과) {
      console.log(결과);
      응답.render('edit.ejs', { post: 결과 }); //파라미터중 :id
    }
  );
});

app.put('/edit', function (요청, 응답) {
  db.collection('post').updateOne(
    { _id: parseInt(요청.body.id) },
    { $set: { 제목: 요청.body.title, 날짜: 요청.body.date } },
    function (에러, 결과) {
      console.log('수정완료');
      응답.redirect('/list');
    }
  );
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

app.delete('/delete', function (요청, 응답) {
  요청.body._id = parseInt(요청.body._id);
  db.collection('post').deleteOne(요청.body, function (에러, 결과) {
    console.log('삭제완료');
  });
  응답.send('삭제완료');
});

app.get('/detail/:id', function (요청, 응답) {
  db.collection('post').findOne(
    { _id: parseInt(요청.params.id) },
    function (에러, 결과) {
      응답.render('detail.ejs', { data: 결과 });
    }
  );
});
