// a + b
// a - b
// a / b
// a ** b

/* 계산기 */
const calculator = {
  add: function (a, b) {
    console.log(a + b)
  },
  minus: function (a, b) {
    console.log(a - b)
  },
  div: function (a, b) {
    console.log(a / b)
  },
  powerOf: function (a, b) {
    console.log(a ** b)
  },
  multi: function (a, b) {
    console.log(a * b)
  },
  last: function (a, b) {
    console.log(a % b)
  },
}
calculator.add(10, 5)
calculator.minus(9, 4)
calculator.div(8, 4)
calculator.powerOf(2, 10)
calculator.multi(10, 10)
calculator.last(5, 2)
