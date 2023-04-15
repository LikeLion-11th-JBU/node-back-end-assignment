/* 조건문1 */
/* 음주 가능 나이 계산기 */

// 유저의 나이 묻기
//const age = prompt('How old are you?') // prompt() : 사용자에게 창을 띄울 수 있도록 한다.
//console.log(age, parseInt(age))

const age = parseInt(prompt('How old are you?')) // 함수는 안에서 바깥으로 실행된다.
console.log(isNaN(age))

if (isNaN(age)) {
  // condition == true
  console.log('please write a number')
} else {
  console.log('Thank you for writing your age')
}
