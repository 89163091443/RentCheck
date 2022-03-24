const { formReg } = document.forms;
formReg.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    name, email, pass, street, house,
  } = e.target;
  console.log(name.value, email.value, pass.value, street.value, house.value);
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: name.value, email: email.value, password: pass.value, street: street.value, house: house.value,
    }),
  });
  if (response.ok) {
    window.location = '/login';
  }
  if (!response.ok) {
    alert('Пользователь с таким email уже существует');
    window.location.reload();
  }
});
