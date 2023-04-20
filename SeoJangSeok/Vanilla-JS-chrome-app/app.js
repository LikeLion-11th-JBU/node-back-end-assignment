const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden' // 'hidden' class를 자주 쓰니까 변수 할당.
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용. loginForm이나, loginInput 처럼 중요한 정보를 담은게 아니라서 대문자로 작성.

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem('username', username)
  // greeting.innerText = 'Hello ' + username // 아래랑 같음.
  greeting.innerText = `Hello ${username}` // 위에랑 같음.
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit', onLoginSubmit)
