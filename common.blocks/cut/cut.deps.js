[{
    mustDeps : [
        { block : 'i-bem', mods : { 'elem-instances' : true }, elem : 'dom' }
    ],
    shouldDeps : [
        { elems : ['switcher', 'container'] },
        { block : 'link', mods : { theme : 'islands', pseudo : true } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'cut', mods : { theme : 'hackaton' } },
        { block : 'link', mods : { theme : 'islands', type : 'pseudo' } }
    ]
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'cut', mods : { theme : 'hackaton' } },
        { block : 'link', mods : { theme : 'islands', type : 'pseudo' } }
    ]
}]
