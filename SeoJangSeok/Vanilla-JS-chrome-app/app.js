/* 조건문3 */
/* 음주 가능 나이 계산기 */

// 유저의 나이 묻기
//const age = prompt('How old are you?') // prompt() : 사용자에게 창을 띄울 수 있도록 한다.
//console.log(age, parseInt(age))

const age = parseInt(prompt('How old are you?')) // 함수는 안에서 바깥으로 실행된다.
//console.log(isNaN(age))

/* true || true == true
false || true == true
true || false == true
false || false == false

true && true == true
true && false == false
false && true == false
false && false == false */

if (isNaN(age) || age < 0) {
  console.log('please write a real positive number')
} else if (age < 18) {
  console.log('You are too young.')
} else if (age >= 18 && age <= 50) {
  console.log('You can drink')
} else if (age > 50 && age <= 80) {
  console.log('You should exercise')
} else if (age === 100) {
  console.log('wow you are wise')
} else if (age > 80) {
  console.log('You can do whatever you want')
}
