/* function */

/* function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + "and I'm " + age) // Hello my name is nicoand I'm 10 \n Hello my name is daland I'm 23 \n Hello my name is lynnand I'm 21
}

sayHello('nico', 10)
sayHello('dal', 23)
sayHello('lynn', 21)
*/

// 계산기
/* function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber) // plus()일때, NaN : Not a Number(숫자가 아님) // 68
}
function divide(a, b) {
  console.log(a / b) // 4.9
}
plus(8, 60)
divide(98, 20)
*/

const player = {
  name: 'nico',
  sayHello: function (otherPersonName) {
    console.log('hello ' + otherPersonName + ' nice to meet you!') //hello nico nice to meet you! \n hello lynn nice to meet you!
  },
}

player.sayHello('nico')
player.sayHello('lynn')
