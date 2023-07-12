// const math = require('./math')

// const result = math.sum(1, 2)

// console.log(result)

// const fs = require('fs')
// const data = fs.readFileSync('./data.txt', 'utf-8')

// const data = fs.readFile('./data.txt', 'utf8', function (err, data) {
//   console.log(data)
// })
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!\n')
  } else if (req.url === '/users') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('User list\n')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
