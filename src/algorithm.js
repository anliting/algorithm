;(async()=>{
    let lazyMap=await module.importByPath('https://gitcdn.link/cdn/anliting/althea/ec53a6b03f7442787761ef9ca0bc6f95d758190d/src/AltheaServer/HttpServer/files/lib/tools/lazyMap.js',{mode:1})
    module.repository.algorithm=lazyMap({
        CompoundArrayContainer: 'algorithm/CompoundArrayContainer.js',
        DirectedGraph:          'algorithm/DirectedGraph.js',
        PriorityQueue:          'algorithm/PriorityQueue.js',
        Queue:                  'algorithm/Queue.js',
        Stack:                  'algorithm/Stack.js',
    },module.shareImport.bind(module))
    let[
        DirectedGraph,
        PriorityQueue,
        Queue,
        Stack,
    ]=await Promise.all([
        module.repository.algorithm.DirectedGraph,
        module.repository.algorithm.PriorityQueue,
        module.repository.algorithm.Queue,
        module.repository.algorithm.Stack,
    ])
    return{
        DirectedGraph,
        PriorityQueue,
        Stack,
        Queue,
    }
})()
