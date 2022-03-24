const { logForm } = document.forms;
logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, password } = e.target;
  console.log(email.value, password.value);
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  if (response.ok) {
    window.location = '/check';
  }
  if (!response.ok) {
    alert('Неверный логин или пароль!');
    window.location.reload();
  }
});
