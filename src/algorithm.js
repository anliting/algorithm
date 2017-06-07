;(async()=>{
    let lazyMap=await module.importByPath('https://gitcdn.link/cdn/anliting/althea/ec53a6b03f7442787761ef9ca0bc6f95d758190d/src/AltheaServer/HttpServer/files/lib/tools/lazyMap.js',{mode:1})
    module.repository.algorithm=lazyMap({
        DirectedGraph:'DirectedGraph.js',
        PriorityQueue:'PriorityQueue.js',
    },module.shareImport.bind(module))
    let[
        DirectedGraph,
        PriorityQueue,
    ]=await Promise.all([
        module.repository.algorithm.DirectedGraph,
        module.repository.algorithm.PriorityQueue,
    ])
    return{
        DirectedGraph,
        PriorityQueue,
    }
})()
