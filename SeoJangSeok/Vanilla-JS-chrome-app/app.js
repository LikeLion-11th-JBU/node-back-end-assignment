const h1 = document.querySelector('div.hello:first-child h1') // hello라는 class를 가진 div 내부의 first-child인 h1

function handleTitleClick() {
  const clickedClass = 'clicked sexy-font'
  if (h1.className === clickedClass) {
    h1.className = ''
  } else {
    h1.className = clickedClass
  }
}

h1.addEventListener('click', handleTitleClick)
