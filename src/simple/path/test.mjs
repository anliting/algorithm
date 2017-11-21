import path from '../path.mjs'
let
    tests={
        '/':        '/',
        '/.':       '/',
        '/..':      '/',
        '/a/..':    '/',
        '/a/.':     '/a',
        '/a':       '/a',
        '/a/':      '/a/',
        '.':        '.',
        '..':       '..',
        'a/..':     '.',
        '../a':     '../a',
        './':       './',
    },
    failed=Object.entries(tests).map(t=>{
        let[k,v]=t
        return{t,passed:path.normalize(k)==v}
    }).filter(o=>!o.passed)
if(failed.length==0)
    console.log('Passed.')
else for(let{t}of failed){
    let[k,v]=t
    console.log(`Failed on path.normalize("${k}"); expected "${v}" but "${path.normalize(k)}" is returned`)
}
