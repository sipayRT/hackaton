({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : {
        block : 'content',
        attrs : { style : 'width: 400px;' },
        content : [
            'theme-hackaton, size-s: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 's', text : true },
                progress : 25
            },
            '<br>theme-hackaton, size-m: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 'm', text : true },
                progress : 88
            },
            '<br>theme-hackaton, no progress: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 's', text : true }
            },
            '<br>theme-hackaton, no text (77%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 's' },
                progress : 77
            },
            '<br>theme-islands (35%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'islands' },
                progress : 35
            }
        ]
    }
})
