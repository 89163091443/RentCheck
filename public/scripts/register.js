const { formReg } = document.forms;
formReg.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    name, email, pass, street, house,
  } = e.target;
  console.log(name.value, email.value, pass.value, street.value, house.value);
  const responseCoord = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=ac2683a3-e43f-4f02-af9f-391164cc1c05&format=json&geocode=Москва+${street.value}+${house.value}`);
  const data = await responseCoord.json();
  const coord = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point
  console.log(coord);
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: name.value, email: email.value, password: pass.value, street: street.value, house: house.value, coord
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
