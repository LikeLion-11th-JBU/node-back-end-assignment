const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

let users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bek' },
  { id: 3, name: 'chris' },
]

app.use(morgan('dev'))

app.get('/users', (req, res) => {
  req.query.limit = req.query.limit || 10
  const limit = parseInt(req.query.limit, 10) //"2"라는 문자열로 들어온다 => parseInt(인자값,진수)를 사용해 정수로 변환
  if (Number.isNaN(limit)) {
    return res.status(400).end()
  }
  res.json(users.slice(0, limit))
})

app.get('/users/:id', function (req, res) {
  const id = parseInt(req.params.id, 10)
  if (Number.isNaN(id)) return res.status(400).end()
  const user = users.filter((user) => user.id === id)[0]
  if (!user) return res.status(404).end()
  res.json(user)
})

app.delete('/users/:id', function (req, res) {
  const id = parseInt(req.params.id, 10)
  if (Number.isNaN(id)) return res.status(400).end()
  users = users.filter((user) => user.id !== id)
  res.status(204).end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
