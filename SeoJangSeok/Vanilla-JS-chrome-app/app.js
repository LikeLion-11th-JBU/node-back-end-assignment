/* Arrays */

// 배열이 없는 세상의 JS
// const mon = 'mon' // String
// const tue = 'tue' // String
// const wed = 'wed' // String
// const thu = 'thu' // String
// const fri = 'fri' // String
// const sat = 'sat' // String
// const sun = 'sund' // String

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun
// console.log(daysOfWeek) // == montuewedthufirsatsund 문자열 형식으로 나온다.

// 배열로 정렬
// const daysOfWeek1 = [mon, tue, wed, thu, fri, sat, sun] // string 대신에 array가 된다.
const daysOfWeek2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

// console.log(daysOfWeek1) // == ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund']
console.log(daysOfWeek2) // == ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// 배열에서 아이템 받아오기
console.log(daysOfWeek2[5]) // == sat
console.log(daysOfWeek2[4]) // == fri

// 배열에 요일 더 추가하기
daysOfWeek2.push('sun')
console.log(daysOfWeek2) // == ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
