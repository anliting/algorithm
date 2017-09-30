import modulePromise from 'https://cdn.rawgit.com/anliting/module/50f7f4b6bc58135fa99348f35862b457c3d080c9/src/esm/module.js'
import tests from './tests.js'
;(async()=>{
    let
        module=await modulePromise,
        repository=await module.importByPath('https://gitcdn.link/cdn/anliting/althea/c676869afdb008eb27337fac0de432a13ddbc2a7/src/AltheaServer/HttpServer/files/lib/repository.static.js',{mode:1}),
        dom=await repository.althea.dom
    dom.head(
        dom.style(`
            table{
                width:600px;
                margin:0 auto;
                border-collapse:collapse;
            }
            tr+tr td{
                border-top:1px solid lightgray;
            }
        `)
    )
    let table
    dom.body(
        table=dom.table(
            dom.tr(
                dom.th('Description'),
                dom.th('Result'),
                dom.th('Time Used in ms'),
            ),
        )
    )
    ;(async()=>{
        for(let t of tests){
            let start=performance.now()
            let res=t.test()
            let end=performance.now()
            dom(table,dom.tr(
                dom.td(t.description),
                dom.td(res?'passed':'failed'),
                dom.td((end-start).toFixed(3)),
            ))
            await new Promise(setTimeout)
        }
    })()
})()
