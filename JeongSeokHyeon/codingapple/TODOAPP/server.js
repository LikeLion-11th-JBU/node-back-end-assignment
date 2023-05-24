const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

const MongoClient = require('mongodb').MongoClient

app.get('/pet', function (요청, 응답) {
  응답.send('펫용품 쇼핑할 수 있는 페이지입니다')
})
app.get('/beauty', function (요청, 응답) {
  응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다')
})
app.get('/', function (요청, 응답) {
  응답.render('index.ejs')
})
app.get('/write', function (요청, 응답) {
  응답.sendFile(__dirname + '/write.html')
})
app.get('/list', function (요청, 응답) {
  db.collection('post')
    .find()
    .toArray(function (에러, 결과) {
      console.log(결과)
      응답.render('list.ejs', { posts: 결과 })
    })
})

app.get('/detail/:id', function (요청, 응답) {
  db.collection('post').findOne(
    { _id: parseInt(요청.params.id) },
    function (에러, 결과) {
      응답.render('detail.ejs', { data: 결과 })
    }
  )
})

var db

MongoClient.connect(
  'mongodb+srv://jsh:jsh1357924605@cluster0.vavbgct.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp')

    db.collection('post').insertOne(
      { 이름: 'jeong', _id: 100 },
      function (에러, 결과) {
        console.log('저장완료')
      }
    )

    app.listen(8080, function () {
      console.log('listening on 8080')
    })
  }
)

app.get('/edit/:id', function (요청, 응답) {
  db.collection('post').findOne(
    { _id: parseInt(요청.params.id) },
    function (에러, 결과) {
      응답.render('edit.ejs', { post: 결과 })
    }
  )
})

app.put('/edit', function (요청, 응답) {
  db.collection('post').updateOne(
    { _id: parseInt(요청.body.id) },
    { $set: { 제목: 요청.body.title, 날짜: 요청.body.date } },
    function (에러, 결과) {
      console.log('수정완료')
      응답.redirect('/list')
    }
  )
})

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

app.use(session({ secret: '비밀코드', resave: true, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.get('/login', function (요청, 응답) {
  응답.render('login.ejs')
})

app.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/fail' }),
  function (요청, 응답) {
    응답.redirect('/')
  }
)

app.get('/mypage', 로그인했니, function (요청, 응답) {
  console.log(요청.user)
  응답.render('mypage.ejs', { 사용자: 요청.user })
})

function 로그인했니(요청, 응답, next) {
  if (요청.user) {
    next()
  } else {
    응답.send('로그인안함')
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'pw',
      session: true,
      passReqToCallback: false,
    },
    function (입력한아이디, 입력한비번, done) {
      //console.log(입력한아이디, 입력한비번);
      db.collection('login').findOne(
        { id: 입력한아이디 },
        function (에러, 결과) {
          if (에러) return done(에러)

          if (!결과)
            return done(null, false, { message: '존재하지않는 아이디요' })
          if (입력한비번 == 결과.pw) {
            return done(null, 결과)
          } else {
            return done(null, false, { message: '비번틀렸어요' })
          }
        }
      )
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (아이디, done) {
  db.collection('login').findOne({ id: 아이디 }, function (에러, 결과) {
    done(null, 결과)
  })
})

app.post('/add', function (요청, 응답) {
  db.collection('counter').findOne(
    { name: '게시물갯수' },
    function (에러, 결과) {
      var 총게시물갯수 = 결과.totalpost
      var 저장할거 = {
        _id: 총게시물갯수 + 1,
        작성자: 요청.user._id,
        제목: 요청.body.title,
        날짜: 요청.body.date,
      }
      db.collection('post').insertOne(저장할거, function (에러, 결과) {
        db.collection('counter').updateOne(
          { name: '게시물갯수' },
          { $inc: { totalpost: 1 } },
          function (에러, 결과) {
            if (에러) {
              return console.log('저장 완료')
            }
            응답.send('요청 전송 완료')
          }
        )
      })
    }
  )
})
app.delete('/delete', function (요청, 응답) {
  요청.body._id = parseInt(요청.body._id)

  var 삭제할데이터 = { _id: 요청.body._id, 작성자: 요청.user._id }
  db.collection('post').deleteOne(요청.body, function (에러, 결과) {
    console.log('삭제완료')
  })
  if (에러) {
    console.log(에러)
  }
  응답.status(200).send({ message: '성공했습니다.' })
})

app.post('/register', function (요청, 응답) {
  db.collection('login').insertOne(
    { id: 요청.body.id, pw: 요청.body.pw },
    function (에러, 결과) {
      응답.redirect('/')
    }
  )
})

app.get('/search', (요청, 응답) => {
  console.log(요청.query.value)
  var 검색조건 = [
    {
      $search: {
        index: 'title',
        text: {
          query: 요청.query.value,
          path: '제목',
        },
      },
    },
    { $project: { 제목: 1, _id: 0, score: { $meta: 'searchScore' } } },
  ]
  db.collection('post')
    .aggregate(검색조건)
    .toArray((에러, 결과) => {
      console.log(결과)
      응답.render('search.ejs', { posts: 결과 })
    })
})

app.use('/shop', require('./routes/shop'))
app.use('/board/sub', require('./routes/board'))

let multer = require('multer')

var stortage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/image')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  filefilter: function (req, file, cb) {
    var ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('PNG, JPG만 업로드하세요'))
    }
    cb(null, true)
  },
})

var upload = multer({ storage: stortage })

app.get('/upload', function (요청, 응답) {
  응답.render('upload.ejs')
})

app.post('/upload', upload.single('profile'), function (요청, 응답) {
  응답.send('업로드완료')
})

app.get('/image/:imageName', function (요청, 응답) {
  응답.sendFile(__dirname + '/public/image/' + 요청.params.imageName)
})
