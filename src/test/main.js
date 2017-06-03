;(async()=>{
    let DirectedGraph=await module.shareImport('../DirectedGraph.js')
    let g=new DirectedGraph
    for(let n=3;n--;)g.addVertex(n)
    ;[[2,0],[2,1],[1,0]].map(e=>g.addEdge(...e))
    console.log(g.topologicalSort)
})()
