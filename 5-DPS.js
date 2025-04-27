
const form = document.getElementById('adminForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const correctUsername = "WebDev";
  const correctPassword = "webdev";

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "3-Printable-Data.html";
  } else {
    alert("Incorrect Username or Password.");
  }
});



