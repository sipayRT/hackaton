({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'theme-hackaton' },

        {
            block : 'test',
            content : {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 's', text : true },
                progress : 25,
                cls : 'hackaton-s-text'
            }
        },
        {
            block : 'test',
            content : {
                block : 'progressbar',
                mods : { theme : 'hackaton', size : 'm' },
                cls : 'hackaton-m-no-text-no-progress'
            }
        },

        { tag : 'h2', content : 'theme-islands' },

        {
            block : 'test',
            content : {
                block : 'progressbar',
                mods : { theme : 'islands' },
                progress : 35,
                cls : 'islands'
            }
        }
    ]
})
