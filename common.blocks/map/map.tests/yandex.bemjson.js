({
    block : 'page',
    title : 'Yandex Maps Examples',
    head : [
        { elem : 'css', url : '_yandex.css' },
        { elem : 'js', url : '_yandex.js' }
    ],
    content : [
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'yandex'
                },
                center : [55.751574, 37.573856],
                zoom : 10,
                controls : [],
                geoObjects : [
                    {
                        coordinates :  [55.751574, 37.573856],
                        hintContent : 'тест',
                        iconContent : 'Длинный текст'
                    },
                    {
                        type : 'placemark',
                        coordinates :  [55.621515, 37.333333]
                    },
                    {
                        type : 'rectangle',
                        coordinates :  [[55.751574, 37.573856], [55.621515, 37.333333]],
                        options : {
                            draggable : true,
                            strokeWidth : 5,
                            strokeOpacity : 0.7
                        }
                    }
                ]
            }
        },
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'yandex'
                },
                center : [55.751574, 37.573856],
                zoom : 10
            }
        }
    ]
})
