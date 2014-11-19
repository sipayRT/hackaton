({
    block : 'page',
    title : 'bem-components: cut',
    mods : { theme : 'simple' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { tag : 'h2', content : 'Cut' },
        {
            block : 'cut',
            expandedText : 'Hide',
            mods : { theme : 'hackaton' },
            switcher : 'Show',
            content : 'Text here'
        }
    ]
});
