const fs = require('fs')

//const data = fs.readFileSync('./data.txt', 'utf8')

const data = fs.readFile('./data.txt', 'utf8', function (err, data) {
  console.log(data) // This is data file
})
