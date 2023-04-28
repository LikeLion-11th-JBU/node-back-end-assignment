const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
// const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById('todo-list')

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
}

function paintToDo(newTodo) {
  const li = document.createElement('Li')
  const span = document.createElement('span')
  span.innerText = newTodo
  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value // input에 입력한 value를 새로운 변수에 복사.
  toDoInput.value = '' // 입력했을 때 칸 비워주기.
  paintToDo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
