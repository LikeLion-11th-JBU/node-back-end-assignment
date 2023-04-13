// var a = 5

// if (a > 2) {
//   console.log('a>2')
// } else {
//   console.log('a<=2')
// }

// var a = 0
// if (a > 2) {
//   console.log('a>2')
// } else if (a == 2) {
//   console.log('a=2')
// } else if (a == 0) {
//   console.log('a=0')
// } else if (a < 2) {
//   console.log('a<2')
// }

var mbti = 'INFP'
var val
switch (mbti) {
  case 'INFP':
    val = 'INFP'
    break
  case 'ENFP':
    val = 'ENFP'
    break
  case 'ISTJ':
    val = 'ISTJ'
    break
  default:
    val = '유효한 값이 아닙니다'
}

console.log(val)
