document.addEventListener('DOMContentLoaded', function () {

  //Яндекс карта map//
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { //1 метка
        center: [55.7585447797803, 37.60101831578927],
        zoom: 15,
        controls: ['geolocationControl', 'zoomControl']  //Убрали увеличитель и др..
      }, {
        searchControlProvider: 'yandex#search',
        //Для controls: 
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition:  { top: "310px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "235px", right: "20px" }
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myGeoObject = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Шоурум №4',
        balloonContent: '10:00-20:00'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/ellipse-ymaps.svg',
        // iconImageHref: 'https://e7.pngegg.com/pngimages/142/60/png-clipart-computer-icons-geo-fence-others-miscellaneous-fence.png',
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemark = new ymaps.Placemark([], { //2 метка
        hintContent: 'Шоурум №4',
        balloonContent: 'июль',
        iconContent: '12'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'https://e7.pngegg.com/pngimages/142/60/png-clipart-computer-icons-geo-fence-others-miscellaneous-fence.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      });

    myMap.geoObjects.add(myGeoObject);
  });

})