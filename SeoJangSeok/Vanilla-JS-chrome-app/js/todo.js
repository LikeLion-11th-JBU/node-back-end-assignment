const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
// const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById('todo-list')

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value // input에 입력한 value를 새로운 변수에 복사.
  toDoInput.value = '' // 입력했을 때 칸 비워주기.
}

toDoForm.addEventListener('submit', handleToDoSubmit)
