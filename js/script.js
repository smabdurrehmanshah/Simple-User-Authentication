window.addEventListener('pageshow', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if(currentUser)
    window.location.href = '../home.html';
});

const form = document.getElementById('form');
const users = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = {
    fullName: event.target.floatingName.value,
    email: event.target.floatingEmail.value,
    password: event.target.floatingPassword.value
  };

  const registeredUsers = JSON.parse(localStorage.getItem('users'));

  if(!registeredUsers) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('You are successfully registered!')
    event.target.reset();
    window.location.href = '../login.html';
  }
  else {
    const foundUser = registeredUsers.find(item => item.email === user.email);

    if(!foundUser) {
      registeredUsers.push(user);
      localStorage.setItem('users', JSON.stringify(registeredUsers));
      alert('You are successfully registered!')
      event.target.reset();
      window.location.href = '../login.html';
    }
    else
      alert('User already exists!');
  }
});