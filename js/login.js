window.addEventListener('pageshow', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if(currentUser)
    window.location.href = '../home.html';
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.floatingInput.value;
  const password = event.target.floatingPassword.value;

  const registeredUsers = JSON.parse(localStorage.getItem('users'));

  if(!registeredUsers)
    alert('Invalid email or password!');
  else {
    const foundUser = registeredUsers.find(user => user.email === email && user.password === password);

    if(!foundUser)
      alert('Invalid email or password!');
    else {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      window.location.href = "../home.html";
    }
  }
});