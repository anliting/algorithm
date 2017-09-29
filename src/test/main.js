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
function testStack(){
    let c=new template.Stack
    c.in(3,5,9,4,8,2,1,6,7)
    console.log(...c)
}
function testQueue(){
    let c=new template.Queue
    c.in(3,5,9,4,8,2,1,6,7)
    console.log(...c)
}
function testArrayDifference(){
    console.log(template.array.difference([3,5,9,17]))
}
function testArrayPrefixSum(){
    console.log(template.array.prefixSum([3,2,4,8]))
}
function testRange(){
    let
        r=new template.Range(3,9),
        s=new template.Range(-4,7)
    console.log(r.intersect(s))
}
function testVector2(){
    let v=new template.Vector2(3,4)
    console.log(+v)
}
