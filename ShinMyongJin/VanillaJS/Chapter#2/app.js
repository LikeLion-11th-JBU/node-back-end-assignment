// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sun';

// const dayOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// //Get Item from Array
// console.log(dayOfWeek[4]);

// //Add one more day to the array
// dayOfWeek.push('sun');

// console.log(dayOfWeek);

// const toBuy = ['potato', 'tomato', 'pizza'];

// console.log(toBuy[2]);

// const player = {
//   name: 'MJ',
//   points: 10,
//   fat: true,
// };
// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);

// function sayHello(nameOfPerson, age) {
//   console.log('Hello my name is ' + nameOfPerson + "I'm " + age);
// }

// sayHello('MJ', 10);
// sayHello('dal', 23);
// sayHello('lynn', 21);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//   console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20);

//function 에서 정보를 보내는 법
// const player = {
//   name: 'MJ',
//   sayHello: function (otherPersonsName) {
//     console.log('hello! ' + otherPersonsName + ' nice to meet you');
//   },
// };

// console.log(player.name);
// player.sayHello('lynn');
// player.sayHello('MJ');

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 1;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

const age = parseInt(prompt('How old are you?'));

if (isNaN(age) || age < 0) {
  console.log('Please write a real positive number');
} else if (age < 19) {
  console.log('You are too young');
} else if (age >= 19 && age <= 50) {
  console.log('You can drink');
} else if (age > 50 && age <= 80) {
  console.log('You should exercise');
} else if (age > 80) {
  console.log('You can do whatever you want');
}
