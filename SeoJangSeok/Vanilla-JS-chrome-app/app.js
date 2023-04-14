/* Object */
// object
const player = {
  name: 'Jang Seok',
  points: 10,
  fat: true,
}
// object 접근 방법
console.log(player) // == {name: 'Jang Seok', points: 10, fat: true}
console.log(player.name) // == Jang Seok
console.log(player['name']) // == Jang Seok

// Object update
player.fat = false
console.log(player) // == {name: 'Jang Seok', points: 10, fat: false}
player.points = player.points + 15
console.log(player.points) // == 25

// Object add
player.lastName = 'potato'
console.log(player) // == {name: 'Jang Seok', points: 10, fat: false, lastName: 'potato'}
