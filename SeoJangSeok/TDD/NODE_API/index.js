// 노드의 Hello World 서버 코드
const http = require('http') // http 모듈 가져옴

const hostname = '127.0.0.1' // 내 컴퓨터
const port = 3000 // 포트번호

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  } else if (req.url === '/users') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('User list')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
