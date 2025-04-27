const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if(!currentUser) {
  window.location.href = '../login.html';
}
else {
  userName.textContent = currentUser.fullName;
}

const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', (event) => {
  localStorage.removeItem('currentUser');
  window.location.href = '../login.html';
});