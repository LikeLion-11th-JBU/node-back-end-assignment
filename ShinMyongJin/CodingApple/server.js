const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb+srv://MJ00:myongjin714@mj00.anmafpi.mongodb.net/?retryWrites=true&w=majority',
  function (에러, client) {
    if (에러) return console.log(에러);
    //서버띄우는 코드 여기로 옮기기
    app.listen('8080', function () {
      console.log('listening on 8080');
    });
  }
);

app.listen(8080, function () {
  console.log('listening on 8080');
});

//누군가 /pet으로 방문을 하면
// pet 관련된 안내문을 띄우기

app.get('/pet', function (요청, 응답) {
  응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});
app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});

app.get('/write', function (요청, 응답) {
  응답.sendFile(__dirname + '/write.html');
});

app.use(express.urlencoded({ extended: true }));
