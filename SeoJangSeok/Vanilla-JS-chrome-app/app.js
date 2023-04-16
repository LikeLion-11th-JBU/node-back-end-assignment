const h1 = document.querySelector('div.hello:first-child h1') // hello라는 class를 가진 div 내부의 first-child인 h1

function handleTitleClick() {
  // const clickedClass = "clicked"
  // if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass)
  //   } else {
  //     h1.classList.add(clickedClass)
  //   }
  // }
  h1.classList.toggle('clicked')
}
h1.addEventListener('click', handleTitleClick)
