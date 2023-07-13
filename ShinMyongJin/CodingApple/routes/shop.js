var router = require('express').Router();

function 로그인했니(요청, 응답, next) {
  if (요청.user) {
    next();
  } else {
    응답.send('로그인 안했어?좀해');
  }
}

router.use('/shirts', 로그인했니);

router.get('/shirts', function (요청, 응답) {
  응답.send('셔츠 파는 페이지');
});

router.get('/pants', function (요청, 응답) {
  응답.send('바지 파는 페이지');
});

module.exports = router;
