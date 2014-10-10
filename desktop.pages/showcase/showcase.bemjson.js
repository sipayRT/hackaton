({
    block : 'page',
    title : 'bem-components: Showcase',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_showcase.css' },
        { elem : 'js', url : '_showcase.js' }
    ],
    content : [
        { tag : 'h2', content : 'Showcase' },
        {
            content : {
                block : 'menu',
                mods : { theme : 'normal', size : 'm' },
                content : {
                    elem : 'group',
                    title : 'go to:',
                    content : [
                        'attach', 'button', 'checkbox', 'checkbox-group',
                        'control-group', 'dropdown', 'icon', 'image',
                        'input', 'link', 'menu', 'popup',
                        'radio', 'radio-group', 'select', 'spin'
                    ].map(function(blockName) {
                        return {
                            block : 'menu-item',
                            mods : { type : 'link' },
                            content : {
                                block : 'link',
                                url : '#' + blockName,
                                content : blockName
                            }
                        }
                    })
                }
            }
        },
        [
            [
                {
                    block : 'attach',
                    mods : { theme : 'simple' },
                    button : {
                        block : 'button',
                        icon : { block : 'icon', mods : { action : 'download' } },
                        text : 'file'
                    },
                    noFileText : 'no file selected'
                }
            ],
            [
                {
                    tag : 'p',
                    content : ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [{
                            block : 'button',
                            mods : { theme : 'normal', size : size },
                            text : 'size ' + size
                        }, ' ']
                    })
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', disabled : true },
                    text : 'disabled'
                },
                ' ',
                {
                    block : 'button',
                    mods : {
                        theme : 'normal',
                        size : 'm',
                        type : 'link'
                    },
                    url : '#',
                    text : 'type link'
                },
                ' ',
                {
                    block : 'button',
                    mods : {
                        theme : 'normal',
                        size : 'm'
                    },
                    textMaxWidth : 100,
                    text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm' },
                    text : 'download',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm' },
                    icon : { block : 'spin', mods : { theme : 'normal', size : 's', progress : true } },
                    text : 'Loading...'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', view : 'action' },
                    text : 'action'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'm', togglable : 'check', view : 'pseudo' },
                    text : 'check-button'
                }
            ],
            [
                {
                    tag : 'p',
                    content : [
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 'm' },
                            text : 'size m'
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 'l' },
                            text : 'size l'
                        }
                    ]
                },
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'm', checked : true },
                    val : 2,
                    name : 'r1',
                    text : 'checked'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'm', disabled : true, checked : true },
                    val : 4,
                    name : 'r1',
                    text : 'disabled'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'm', type : 'button' },
                    val : 1,
                    name : 'r1',
                    text : 'type button'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'normal', size : 'm', type : 'button' },
                    text : 'with icon',
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                }
            ]
        ].map(function(blockContent, i) {
            var blocks = [
                'attach', 'button', 'checkbox', 'checkbox-group',
                'control-group', 'dropdown', 'icon', 'image',
                'input', 'link', 'menu', 'popup',
                'radio', 'radio-group', 'select', 'spin'
            ];

            return {
                content : [
                    {
                        block : 'headline',
                        content : {
                            block : 'link',
                            attrs : { name : blocks[i] },
                            content : blocks[i]
                        }
                    },
                    {
                        content : blockContent
                    }
                ]
            }
        })
    ]
})
