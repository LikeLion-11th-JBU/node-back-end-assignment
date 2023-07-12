//기본 모듈 사용
const http = require('http') // http 모듈을 불러와서 http 변수에 할당.

http.createServer()

// 직접 만든 모듈 가져오기
const math = require('./math')

const result = math.sum(1, 2) // 1+2
console.log(result) // 3
