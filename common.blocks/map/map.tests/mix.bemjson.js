({
    block : 'page',
    title : 'Mix Maps Examples',
    head : [
        { elem : 'css', url : '_mix.css' },
        { elem : 'js', url : '_mix.js' }
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
                zoom : 10
            }
        },
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'google'
                },
                center : [55.751574, 37.573856],
                zoom : 10
            }
        }
    ]
})
