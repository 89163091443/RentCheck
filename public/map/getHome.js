function getHome(data) {
  const home = new ymaps.Placemark([55.743233, 37.767735], {
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
  return 
}
