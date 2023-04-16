const title = document.querySelector('div.hello:first-child h1') // hello라는 class를 가진 div 내부의 first-child인 h1
// console.log(title) // <h1>Hello</h1>
// console.dir(title) // object로 표시한 element 표시
// title.style.color = 'blue'
console.dir(title)

function handleTitleClick() {
  console.log('title was clicked!')
  title.style.color = 'blue'
}
function handleMouseEnter() {
  //   console.log('mouse is here!')
  title.innerText = 'Mouse is here!'
}
function handleMouseLeave() {
  title.innerText = 'Mouse is gone!'
}

title.addEventListener('click', handleTitleClick)
title.addEventListener('mouseenter', handleMouseEnter)
title.addEventListener('mouseleave', handleMouseLeave)
