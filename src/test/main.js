;(async()=>{
    let algorithm=await module.shareImport('../algorithm.js')
    function testContainerIterator(){
        let c=new algorithm.Queue
        c.in(3,5,9,4,8,2,1,6,7)
        console.log(...algorithm.Container.iterator(c))
    }
    function testDirectedGraph(){
        let g=new algorithm.DirectedGraph
        for(let n=3;n--;)g.addVertex(n)
        ;[[2,0],[2,1],[1,0]].map(e=>g.addEdge(...e))
        console.log(...g.topologicalSort)
    }
    function testPriorityQueue(){
        let c=new algorithm.PriorityQueue
        c.in(3,5,9,4,8,2,1,6,7)
        console.log(...c)
    }
    function testPriorityQueuePerformanceIn(){
        let n=1e6
        let c=new algorithm.PriorityQueue
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
        let c=new algorithm.PriorityQueue
        for(let i=0;i<n;i++)
            c.in(i)
        let t0=new Date
        for(let i=0;i<n;i++)
            c.out()
        let t1=new Date
        console.log(t1-t0)
    }
    function testStack(){
        let c=new algorithm.Stack
        c.in(3,5,9,4,8,2,1,6,7)
        console.log(...c)
    }
    function testQueue(){
        let c=new algorithm.Queue
        c.in(3,5,9,4,8,2,1,6,7)
        console.log(...c)
    }
    testContainerIterator()
})()
