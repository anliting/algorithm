;(async()=>{
    let algorithm=await module.shareImport('../algorithm.js')
    async function testDirectedGraph(){
        let DirectedGraph=algorithm.DirectedGraph
        let g=new DirectedGraph
        for(let n=3;n--;)g.addVertex(n)
        ;[[2,0],[2,1],[1,0]].map(e=>g.addEdge(...e))
        console.log(...g.topologicalSort)
    }
    async function testPriorityQueue(){
        let PriorityQueue=algorithm.PriorityQueue
        let c=new PriorityQueue
        c.push(3,5,9,4,8,2,1,6,7)
        console.log(...c)
    }
    await testDirectedGraph()
    //await testPriorityQueue()
})()
