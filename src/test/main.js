import tests from './tests.js'
import dom from 'https://cdn.rawgit.com/anliting/althea/5b6a2ce25a6d8e11aecc1614128d58efec2042ab/src/AltheaServer/HttpServer/files/lib/dom.js'
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
        .timeUsed{
            text-align:right;
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
        let res
        try{
            res=t.test()?'passed':'failed'
        }catch(e){
            res='error'
        }
        let end=performance.now()
        dom(table,dom.tr(
            dom.td(t.description),
            dom.td(res),
            dom.td({className:'timeUsed'},(end-start).toFixed(3)),
        ))
        await new Promise(setTimeout)
    }
})()
