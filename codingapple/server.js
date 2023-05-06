const express = require('express'); //라이브 러리 참고
const app = express(); // 라이브러리를 이용한 객체 생성

app.listen(8080,function(){
    console.log('listening on 8080')
}); //.listen(port no. , 서버 실행 후 실행할 코드)을 통해 서버를 열 수 있음

app.get('/pet',function(req,res){
    res.send('펫용품 쇼핑 사이트 입니다.');
});

app.get('/beauty',function(req,res){
    res.send('뷰티 용품 쇼핑 사이트 입니다.');
});