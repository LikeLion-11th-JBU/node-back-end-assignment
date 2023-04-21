const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden' // 'hidden' class를 자주 쓰니까 변수 할당.
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용. loginForm이나, loginInput 처럼 중요한 정보를 담은게 아니라서 대문자로 작성.
const USERNAME_KEY = 'username' // 'username' string을 자주 쓰니까 변수 할당.

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

// console.log(savedUsername) // null 값이 나오면 username이 저장되지 않았다는 뜻.

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // show the greeting
  paintGreetings(savedUsername)
}
