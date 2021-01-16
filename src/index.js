
// let createTask = document.createElement('li')
// let tasks = document.querySelector('tasks')
let form = document.querySelector('#create-task-form')
let ul = document.querySelector('ul')

i = 1
btnId = 10
form.addEventListener('submit', function (event) {
  // let form = document.querySelector('#create-task-form')
  let newTask = document.createElement('li')

  // newTask.textContent = form.value
  let inputValue = document.querySelector('input').value
  event.preventDefault();
  ul.append(newTask)
  newTask.textContent = inputValue
  newTask.id = i
  let deleteButton = document.createElement("BUTTON")
  deleteButton.textContent = "remove"
  deleteButton.classList.add("delete-button")
  deleteButton.id = btnId
  i += 1
  btnId += 1
  newTask.append(deleteButton)
  // deleteBtn(newTask)
  // deleteBtn()
})


// why does this not work?!!!
  let allBtns = document.querySelectorAll(".delete-button")
  allBtns.forEach(function (button) {
      button.addEventListener('click', function(){
        console.log('clicked')
      })

  })
  // button.addEventListener('click', function (event) {
  //   console.log("hi nana")
  //   const li = event.target.closest('li')
  //   li.remove()
  // })

// deleteBtn()



// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // let inputValue = document.querySelector('input').value
  
//   // })
// });
