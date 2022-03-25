let myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [55.76, 37.64], // Москва
    zoom: 11,
    controls: ['routeButtonControl'],
  }, {
    searchControlProvider: 'yandex#search',
  });

  document.getElementById('destroyButton').onclick = function () {
    // Для уничтожения используется метод destroy.
    myMap.destroy();
  };
  // Сравним положение, вычисленное по ip пользователя и
  // положение, вычисленное средствами браузера.
  geolocation.get({
    provider: 'yandex',
    mapStateAutoApply: true,
  }).then((result) => {
    // Красным цветом пометим положение, вычисленное через ip.
    result.geoObjects.options.set('preset', 'islands#redCircleIcon');
    result.geoObjects.get(0).properties.set({
      balloonContentBody: 'Мое местоположение',
    });
    myMap.geoObjects.add(result.geoObjects);
  });

  geolocation.get({
    provider: 'browser',
    mapStateAutoApply: true,
  }).then((result) => {
    // Синим цветом пометим положение, полученное через браузер.
    // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
    result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
    myMap.geoObjects.add(result.geoObjects);
  });
  const control = myMap.controls.get('routeButtonControl');

  // Зададим координаты пункта отправления с помощью геолокации.
  control.routePanel.geolocate('from');

  // Откроем панель для построения маршрутов.
  control.state.set('expanded', true);
}
