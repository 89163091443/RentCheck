
ymaps.ready(init);
async function getCoord() {
  const response = await fetch('/check/coord', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

async function init() {
  const coord = await getCoord();
  console.log(coord);
  const home = new ymaps.Placemark(coord.cord, {
    balloonContent: 'Мой дом',
    hintContent: 'Мой дом',
  });
  home.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });
  const spartak = new ymaps.Placemark([55.804020, 37.697868], {
    balloonContent: '<a href="https://exider.org/">ЛФЛ ВАО</a>'
      + '<p><img style="width: 190px;" src="https://avatars.mds.yandex.net/get-altay/4079915/2a0000017897ca973ff03e72b0cdb0f9d610/XXXL"></p>'
      + '<p>Здесь собираются любительские команды для участия в турнире. Существует 4 дивизиона (Высшая лига, 1 лига, 2 лига и 3 лига). Собирайте команду и заявляйтесь на сезон=)</p>',
    hintContent: 'ЛФЛ ВАО',
    preset: 'islands#redSportIcon',
  });
  spartak.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redSportIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });
  const luzhniki = new ymaps.Placemark([55.715742, 37.553728], {
    balloonContent: '<a href="https://findsport.ru/playground/1950">Аренда поля в Лужниках</a>'
      + '<p><img style="width: 190px;" src="https://avatars.mds.yandex.net/get-zen_doc/1336031/pub_5c4d951db7a28e00ae712d42_5c4d96774d0f1e00acb943a5/scale_1200"></p>'
      + '<p>На данном спортивном объекте имеется несколько футбольных полей с возможностью аренды. Цены от 1500р </p>',
    hintContent: 'Аренда',
    preset: 'islands#blackStretchyIcon',
  });
  luzhniki.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redSportIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });
  const metalurg = new ymaps.Placemark([55.774315, 37.700803], {
    balloonContent: '<a href="https://citysport.pro/">АФЛ, Аренда</a>'
      + '<p><img style="width: 190px;" src="https://avatars.mds.yandex.net/get-altay/3219045/2a00000174e7d2484567ebd9faa73e970e6c/XXXL"></p>'
      + '<p>Данный спортивный объект представляет собой набор возможностей для занятий любым видом спорта. Для подробной информации обращайтесь по телефону +7 (926) 529-06-80</p>',
    hintContent: 'AFL',
    preset: 'islands#blackStretchyIcon',
  });
  metalurg.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redSportIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });
  const trud = new ymaps.Placemark([55.695522, 37.618190], {
    balloonContent: '<a href="https://afl.ru/">АФЛ</a>'
      + '<p><img style="width: 190px;" src="https://avatars.mds.yandex.net/get-altay/1063709/2a00000164d8bfa9901c668d709196224143/XXXL"></p>'
      + '<p>Данная площадка представлена Amateur Football League в партнерстве с МатчТв. По своей сути таже любительская лига только под другим флагом.</p>',
    hintContent: 'AFL',
    preset: 'islands#blackStretchyIcon',
  });
  trud.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redSportIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });
  const CSKA = new ymaps.Placemark([55.792320, 37.519999], {
    balloonContent: '<a href="https://vk.com/lflsever">ЛФЛ САО</a>'
      + '<p><img style="width: 190px;" src="https://avatars.mds.yandex.net/get-altay/1372264/2a0000016397eaa2f4de358962c252ad64df/XXXL"></p>'
      + '<p>Все тот же турнир, но в другом округе</p>',
    hintContent: 'ЛФЛ Север',
    preset: 'islands#blackStretchyIcon',
  });
  CSKA.events.add('mouseenter', (e) => {
    // Ссылку на объект, вызвавший событие,
    // можно получить из поля 'target'.
    e.get('target').options.set('preset', 'islands#redSportIcon');
  })
    .add('mouseleave', (e) => {
      e.get('target').options.unset('preset');
    });

  myMap.geoObjects
    .add(home)
    .add(spartak)
    .add(luzhniki)
    .add(metalurg)
    .add(trud)
    .add(CSKA);
}
