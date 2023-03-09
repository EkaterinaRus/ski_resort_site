ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map-test', {
        center: [55.789631494702085, 49.12548158994538],
        zoom: 3
    });

    let placemarkRoza = new ymaps.Placemark([43.672463976401055, 40.296408192570446], {
        // balloonContentHeader: "Балун метки",
        // balloonContentBody: "Содержимое <em>балуна</em> метки",
        // balloonContentFooter: "Подвал",
        balloonContentHeader: `
            <a href = "https://rosakhutor.com/">Роза Хутор</a>
            `,
        hintContent: "Горнолыжный курорт Роза Хутор"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/128/218/218760.png',
        // Размеры метки.
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    let placemarkArkhyz = new ymaps.Placemark([43.543454556349246, 41.18081329259516], {
        balloonContentHeader: `
            <a href = "https://arhyz-resort.ru/">Архыз</a>
            `,
        hintContent: "Горнолыжный курорт Архыз"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    
    let placemarkElbrus = new ymaps.Placemark([43.27104553788947, 42.47958059105353], {
        balloonContentHeader: `
            <a href = "https://resort-elbrus.ru/">Эльбрус</a>
            `,
        hintContent: "Горнолыжный курорт Эльбрус"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        // iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        // iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    let placemarkGazprom = new ymaps.Placemark([43.67675321299619, 40.2836420522109], {
        balloonContentHeader: `
            <a href = "https://polyanaski.ru/">Газпром</a>
            `,
        hintContent: "Горнолыжный курорт Газпром"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    let placemarkBigWood = new ymaps.Placemark([67.60996216444843, 33.69543414442237], {
        balloonContentHeader: `
            <a href = "https://bigwood.ru/resort/">Большой Вудъявр</a>
            `,
        hintContent: "Горнолыжный курорт Большой Вудъявр"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    
    let placemarkDombay = new ymaps.Placemark([43.292617391829936, 41.626676144934365], {
        balloonContentHeader: `
            <a href = "https://rosakhutor.com/">Домбай</a>
            `,
        hintContent: "Горнолыжный курорт Домбай"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        // iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        // iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });

    let placemarkSheregesh = new ymaps.Placemark([52.93036036866793, 87.99283798393338], {
        balloonContentHeader: `
            <a href = "https://sheregesh.biz/">Шерегеш</a>
            `,
        hintContent: "Горнолыжный курорт Шерегеш"
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        // iconImageHref: 'https://cdn-icons-png.flaticon.com/128/5817/5817230.png',
        // Размеры метки.
        // iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [0, 0]
    });


    map.geoObjects.add(placemarkRoza)
                  .add(placemarkArkhyz)
                  .add(placemarkElbrus)
                  .add(placemarkGazprom)
                  .add(placemarkBigWood)
                  .add(placemarkDombay)
                  .add(placemarkSheregesh);
    //map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

