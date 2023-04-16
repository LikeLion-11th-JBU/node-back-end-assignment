const h1 = document.querySelector('div.hello:first-child h1') // hello라는 class를 가진 div 내부의 first-child인 h1
// console.log(title) // <h1>Hello</h1>
// console.dir(title) // object로 표시한 element 표시
// title.style.color = 'blue'
console.dir(h1)

function handleTitleClick() {
  console.log('title was clicked!')
  h1.style.color = 'blue'
}
function handleMouseEnter() {
  //   console.log('mouse is here!')
  h1.innerText = 'Mouse is here!'
}
function handleMouseLeave() {
  h1.innerText = 'Mouse is gone!'
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato' // document 호출
}
function handleWindowCopy() {
  alert('copier!')
}
function handleWindowOffline() {
  alert('SOS no WIFI')
}
function handleWindowOnline() {
  alert('All GOOOOD')
}

h1.onclick = handleTitleClick
h1.onmouseenter = handleMouseEnter
h1.addEventListener('mouseleave', handleMouseLeave)

window.addEventListener('resize', handleWindowResize)
window.addEventListener('copy', handleWindowCopy)
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)
