[{
    mustDeps : [
        { block : 'i-bem', mods : { 'elem-instances' : true }, elem : 'dom' }
    ],
    shouldDeps : [
        { elems : ['switcher', 'container'] },
        { block : 'link', mods : { theme : 'islands', pseudo : true } }/*,
        { block : 'button', mods : { theme : 'islands' } }*/
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'cut', mods : { theme : 'hackaton' } },
        { tech : 'bemhtml', block : 'link', mods : { theme : 'islands', type : 'pseudo' } }
    ]
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'cut', mods : { theme : 'hackaton' } },
        { tech : 'bemhtml', block : 'link', mods : { theme : 'islands', type : 'pseudo' } }
    ]
}]
