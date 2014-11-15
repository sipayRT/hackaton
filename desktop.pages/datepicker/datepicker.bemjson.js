({
    block : 'page',
    title : 'bem-components',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_datepicker.css' },
        { elem : 'js', url : '_datepicker.js' }
    ],
    content : [
        { tag : 'h2', content : 'Library variety' },
        {
            block : 'table',
            content : [
                {
                    elem : 'row',
                    content : [
                        { elem : 'title', content : 'theme' },
                        { elem : 'title', content : '&mdash;' },
                        { elem : 'title', content : 'simple' },
                        { elem : 'title', content : 'islands' }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'image' },
                        {
                            elem : 'cell',
                            content : {
                                block : 'image',
                                url : '../../test.blocks/icon/_social/twitter.png',
                                width : 16,
                                height : 16,
                                alt : 'Twitter',
                                title : 'Follow us on Twitter'
                            }
                        },
                        { elem : 'cell', content : '&mdash;' },
                        { elem : 'cell', content : '&mdash;' }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'icon' },
                        {
                            elem : 'cell',
                            content : [
                                { block : 'icon', mods : { social : 'twitter' } },
                                ' ',
                                { block : 'icon', url : '../../test.blocks/icon/_social/vk.png' }
                            ]
                        },
                        { elem : 'cell', content : '&mdash;' },
                        { elem : 'cell', content : '&mdash;' }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'link' },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'link',
                                    url : '#',
                                    title : 'link',
                                    target : '_blank',
                                    content : 'link'
                                },
                                ' ',
                                {
                                    block : 'link',
                                    mods : { pseudo : true },
                                    content : 'pseudo'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'link',
                                    mods : { theme : 'simple' },
                                    url : '#',
                                    title : 'link',
                                    target : '_blank',
                                    content : 'link'
                                },
                                ' ',
                                {
                                    block : 'link',
                                    mods : { theme : 'simple', pseudo : true },
                                    content : 'pseudo'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'link',
                                    mods : { theme : 'islands' },
                                    url : '#',
                                    title : 'link',
                                    target : '_blank',
                                    content : 'link'
                                },
                                ' ',
                                {
                                    block : 'link',
                                    mods : { theme : 'islands', view: 'external' },
                                    url : '#',
                                    content : 'external'
                                },
                                ' ',
                                {
                                    block : 'link',
                                    mods : { theme : 'islands', view: 'minor' },
                                    url : '#',
                                    content : 'minor'
                                },
                                ' ',
                                {
                                    block : 'link',
                                    mods : { theme : 'islands', pseudo : true },
                                    content : 'pseudo'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'attach' },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'attach',
                                    button : 'file',
                                    noFileText : 'no file selected'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'attach',
                                    mods : { theme : 'simple' },
                                    button : 'file',
                                    noFileText : 'no file selected'
                                },
                                { tag : 'br' },
                                {
                                    block : 'attach',
                                    mods : { theme : 'simple' },
                                    button : {
                                        block : 'button',
                                        mods : { theme : 'simple' },
                                        icon : { block : 'icon', mods : { action : 'download' } }
                                    },
                                    noFileText : 'no file selected'
                                }
                            ]
                        },
                        { elem : 'cell', content : '&mdash;' }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'input' },
                        {
                            elem : 'cell',
                            content : {
                                block : 'input',
                                val : 'value',
                                placeholder : 'default'
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'input',
                                mods : { theme : 'simple', 'has-clear' : true },
                                val : 'value',
                                placeholder : 'simple'
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'input',
                                mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                val : 'value',
                                placeholder : 'islands'
                            }
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'datepicker' },
                        {
                            elem : 'cell',
                            content : {
                                block : 'datepicker',
                                js: true,
                                content: [
                                    {
                                        block : 'input',
                                        mods : { 'has-clear' : true },
                                        mix: {block: 'datepicker', elem: 'input'},
                                        val : 'value',
                                        placeholder : 'simple'
                                    },
                                    {
                                        block : 'popup',
                                        mods : { autoclosable: true, target: 'anchor' },
                                        content : 'islands',
                                        mix : {block : 'datepicker', elem : 'popup'}
                                    }
                                ]
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'datepicker',
                                js : true,
                                content : [
                                    {
                                        block : 'input',
                                        mods : { theme : 'simple', 'has-clear' : true },
                                        mix : {block : 'datepicker', elem : 'input'},
                                        val : 'value',
                                        placeholder : 'simple'
                                    },
                                    {
                                        block : 'popup',
                                        mods : { autoclosable : true, theme : 'simple', target : 'anchor' },
                                        content : 'islands',
                                        mix : { block : 'datepicker', elem : 'popup' }
                                    }
                                ]
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'datepicker',
                                js : true,
                                content : [
                                    {
                                        block : 'input',
                                        mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                        mix: { block : 'datepicker', elem : 'input' },
                                        val : 'value',
                                        placeholder : 'simple'
                                    },
                                    {
                                        block : 'popup',
                                        mods : { autoclosable : true, theme : 'islands', target: 'anchor' },
                                        content : 'islands',
                                        mix: { block : 'datepicker', elem : 'popup' }
                                    }
                                ]
                            }
                        },
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'button' },
                        {
                            elem : 'cell',
                            content : [
                                { block : 'button', text : 'default' },
                                ' ',
                                {
                                    block : 'button',
                                    text : 'with icon',
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                {
                                    block : 'button',
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                { block : 'button', mods : { 'type' : 'link' }, url : '#', text : 'link' }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                { block : 'button', mods : { theme : 'simple' }, text : 'default' },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'simple' },
                                    text : 'with icon',
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'simple' },
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'simple', type : 'link' },
                                    url : '#',
                                    text : 'link'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'button'
                                },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm' },
                                    text : 'with icon',
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm' },
                                    icon : { block : 'icon', mods : { action : 'download' } }
                                },
                                ' ',
                                {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm', type : 'link' },
                                    url : '#',
                                    text : 'link'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'checkbox' },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'checkbox',
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { checked : true },
                                    val : 2,
                                    text : 'label2'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { type : 'button' },
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { type : 'button', checked : true },
                                    val : 2,
                                    text : 'label2'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'simple' },
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'simple', checked : true },
                                    val : 2,
                                    text : 'label2'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'simple', type : 'button' },
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'simple', type : 'button', checked : true },
                                    val : 2,
                                    text : 'label2'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'm' },
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'm', checked : true },
                                    val : 2,
                                    text : 'label2'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'm', type : 'button' },
                                    val : 1,
                                    text : 'label1'
                                },
                                ' ',
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
                                    val : 2,
                                    text : 'label2'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'radio-group' },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'radio-group',
                                    name : 'radio-default1',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                },
                                ' ',
                                {
                                    block : 'radio-group',
                                    mods : { type : 'button' },
                                    name : 'radio-default2',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'simple' },
                                    name : 'radio-simple1',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                },
                                ' ',
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'simple', type : 'button' },
                                    name : 'radio-simple2',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'islands', size : 'm' },
                                    name : 'radio-islands1',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                },
                                ' ',
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'islands', size : 'm', type : 'button' },
                                    name : 'radio-islands2',
                                    options : [
                                        { val : 1, text : 'first' },
                                        { val : 2, text : 'second', checked : true }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'spin' },
                        { elem : 'cell', content : '&mdash;' },
                        {
                            elem : 'cell',
                            content : {
                                block : 'spin',
                                mods : { theme : 'simple', visible : true }
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'spin',
                                mods : { theme : 'islands', size : 'm', visible : true }
                            }
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'dropdown' },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'button' },
                                    switcher : 'button',
                                    popup : 'Hello, world!'
                                },
                                ' ',
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'link' },
                                    switcher : 'link',
                                    popup : 'Hello, world!'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'button', theme : 'simple' },
                                    switcher : 'button',
                                    popup : 'Hello, world!'
                                },
                                ' ',
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'link', theme : 'simple' },
                                    switcher : 'link',
                                    popup : 'Hello, world!'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'button', theme : 'islands', size : 'm' },
                                    switcher : 'button',
                                    popup : 'Hello, world!'
                                },
                                ' ',
                                {
                                    block : 'dropdown',
                                    mods : { switcher : 'link', theme : 'islands' },
                                    switcher : 'link',
                                    popup : 'Hello, world!'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', content : 'menu' },
                        {
                            elem : 'cell',
                            content : {
                                block : 'menu',
                                mods : { mode : 'check' },
                                content : [
                                    {
                                        block : 'menu-item',
                                        val : 1,
                                        content : 'New'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { checked : true },
                                        val : 2,
                                        content : 'Open'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { disabled : true },
                                        val : 3,
                                        content : 'Open Recent'
                                    }
                                ]
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'menu',
                                mods : { theme : 'simple', mode : 'radio' },
                                content : [
                                    {
                                        block : 'menu-item',
                                        val : 1,
                                        content : 'New'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { checked : true },
                                        val : 2,
                                        content : 'Open'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { disabled : true },
                                        val : 3,
                                        content : 'Open Recent'
                                    }
                                ]
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'menu',
                                mods : { theme : 'islands', size : 'm', mode : 'radio' },
                                content : [
                                    {
                                        block : 'menu-item',
                                        val : 1,
                                        content : 'New'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { checked : true },
                                        val : 2,
                                        content : 'Open'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { disabled : true },
                                        val : 3,
                                        content : 'Open Recent'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
