const h1 = document.querySelector('div.hello:first-child h1') // hello라는 class를 가진 div 내부의 first-child인 h1

function handleTitleClick() {
  const currentColor = h1.style.color
  let newColor
  if (currentColor === 'blue') {
    newColor = 'tomato'
  } else {
    newColor = 'blue'
  }
  h1.style.color = newColor
}

h1.addEventListener('click', handleTitleClick)
