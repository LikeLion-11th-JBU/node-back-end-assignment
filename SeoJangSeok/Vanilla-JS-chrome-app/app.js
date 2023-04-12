/*console.log() : 콘솔에게 메시지를 보낸다.
()안에 있는 값을 콘솔에 출력한다.
()안에는 숫자나 String을 넣을 수 있음.
"" 대신 ''을 사용해도 상관x 둘을 섞어서는 사용 불가능.*/

// console.log(323342) // 323342
// console.log('la la la la') // la la la la

/* 연산 */
// console.log(5 + 2) // 7
// console.log(5 * 2) // 10
// console.log(5 / 2) // 2.5
// 자바스크립트는 파일을 위에서 아래로 읽는다.

/* const(상수) : 바뀌지 않는 값 */
// const a = 5

// console.log(a + 2) // a + 2 == 5 + 2 = 7
// console.log(a * 2) // a * 2 == 5 * 2 = 10
// console.log(a / 2) // a / 2 == 5 / 2 = 2.5

const a = 5
const b = 2

console.log(a + b) // == 5 + 2 = 7
console.log(a * b) // == 5 * 2 = 10
console.log(a / b) // == 5 / 2 = 2.5

/* camelCase 
변수의 이름이 긴 경우 띄어 쓰기가 필요한데 변수의 이름을 띄어쓰면 JS가 알아먹지 못한다. 그래서 띄어쓰기가 필요한 my name과 같은 변수명일때 myName과 같이 대문자로 구분한다.*/
const myName = 'Jang Seok'

console.log('hello ' + myName) // == hello Jang Seok

/* snake_case 
Python에서 사용하는 방법으로 띄어 쓰기가 필요한 변수명일 경우 underline_을 이용해서 구분한다. my_name */
const my_name = 'Jang Seok'

console.log('hello ' + my_name) // == hello Jang Seok
