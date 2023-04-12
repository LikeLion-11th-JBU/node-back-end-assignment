const a = 5
const b = 2
let myName = 'Jang Seok'
/* let이 아닌 const를 쓸 경우 */
//const myName = 'Jang Seok'
// constant variable에 새로운 값을 대입할 수 없다고 에러가 난다.

console.log(a + b) // == 7
console.log(a * b) // == 10
console.log(a / b) // == 2.5
console.log('hello ' + myName) // == hello Jang Seok

// myName의 값을 바꾸고 싶을 때
// myName의 값이 Seo Jang Seok으로 바뀜
myName = 'Seo Jang Seok'

console.log('your new name is ' + myName) // == your new name is Seo Jang Seok
