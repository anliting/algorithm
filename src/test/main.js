import modulePromise from './module.js'
import template from '../optimize/template.js'
function testContainerIterator(){
    let c=new template.Queue
    c.in(3,5,9,4,8,2,1,6,7)
    console.log(...template.Container.iterator(c))
}
function testDirectedGraph(){
    let g=new template.DirectedGraph
    for(let n=3;n--;)g.addVertex(n)
    ;[[2,0],[2,1],[1,0]].map(e=>g.addEdge(...e))
    console.log(...g.topologicalSort)
}
function testPriorityQueue(){
    let c=new template.PriorityQueue
    c.in(3,5,9,4,8,2,1,6,7)
    console.log(...c)
}
function testPriorityQueuePerformanceIn(){
    let n=1e6
    let c=new template.PriorityQueue
    for(let i=0;i<n;i++)
        c.in(i)
    let t0=new Date
    for(let i=0;i<n;i++)
        c.in(i)
    let t1=new Date
    console.log(t1-t0)
}
function testPriorityQueuePerformanceOut(){
    let n=1e6
    let c=new template.PriorityQueue
    for(let i=0;i<n;i++)
        c.in(i)
    let t0=new Date
    for(let i=0;i<n;i++)
        c.out()
    let t1=new Date
    console.log(t1-t0)
}
let tests=[
    {
        description:'Stack',
        test(){
            let
                expected=[7,6,1,2,8,4,9,5,3],
                c=new template.Stack
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...c]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'Queue',
        test(){
            let
                expected=[3,5,9,4,8,2,1,6,7],
                c=new template.Queue
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...c]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'Range',
        test(){
            let
                r=new template.Range(3,9),
                s=new template.Range(-4,7),
                t=r.intersect(s)
            return t.x==3&&t.y==7
        },
    },{
        description:'Vector2',
        test(){
            let v=new template.Vector2(3,4)
            return +v==5
        },
    },{
        description:'array.difference',
        test(){
            let
                a=[3,2,4,8],
                b=template.array.difference([3,5,9,17])
            return a.length==b.length&&a.every((v,i)=>v==b[i])
        },
    },{
        description:'array.prefixSum',
        test(){
            let
                a=[3,5,9,17],
                b=template.array.prefixSum([3,2,4,8])
            return a.length==b.length&&a.every((v,i)=>v==b[i])
        },
    },
]
;(async()=>{
    let
        module=await modulePromise,
        repository=await module.importByPath('https://gitcdn.link/cdn/anliting/althea/c676869afdb008eb27337fac0de432a13ddbc2a7/src/AltheaServer/HttpServer/files/lib/repository.static.js',{mode:1}),
        dom=await repository.althea.dom
    dom.body(
        dom.table(
            tests.map(t=>
                dom.tr(
                    dom.td(t.test()?'passed':'failed'),
                    dom.td(t.description),
                )
            )
        )
    )
})()
