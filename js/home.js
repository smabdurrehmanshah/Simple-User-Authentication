const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if(!currentUser) {
  window.location.href = '../login.html';
}
else {
  userName.textContent = currentUser.fullName;
}

const form = document.getElementById('form');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = {
    todo: event.target.todoInput.value,
    reference: currentUser.email
  };

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
  event.target.reset();
});

function renderTodos() {
  const ulElement = document.querySelector('.list-group');
  ulElement.innerHTML = "";

  const currentTodos = todos.filter(item => currentUser.email === item.reference);

  for(let i=0; i<currentTodos.length; i++) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = currentTodos[i].todo;
    ulElement.appendChild(li);
  }
}


const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', (event) => {
  localStorage.removeItem('currentUser');
  window.location.href = '../login.html';
});