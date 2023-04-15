/* return */
const age = 96
function calcualteKrAge(ageOfForeigner) {
  return ageOfForeigner + 2 // 98
}

const krAge = calcualteKrAge(age) //96 //98
console.log(krAge) // 98

const calculator = {
  add: function (a, b) {
    return a + b
  },
  minus: function (a, b) {
    return a - b
  },
  div: function (a, b) {
    return a / b
  },
  powerOf: function (a, b) {
    return a ** b
  },
  multi: function (a, b) {
    return a * b
  },
}
const addResult = calculator.add(2, 3) // 5
const minusReuslt = calculator.minus(addResult, 10) // -5
const multiResult = calculator.multi(10, minusReuslt) // -50
const divResult = calculator.div(multiResult, addResult) // -10
const powerOfResult = calculator.powerOf(divResult, minusReuslt) // -0/0000099..
// console.log()로 결과를 확인하는 것이 아니라 addReuslt, minusResult..등을 콘솔이 아닌 화면에서 결과를 출력할 수 있다.
