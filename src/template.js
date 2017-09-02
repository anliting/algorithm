;(async()=>{
    let lazyMap=await module.importByPath('https://gitcdn.link/cdn/anliting/althea/ec53a6b03f7442787761ef9ca0bc6f95d758190d/src/AltheaServer/HttpServer/files/lib/tools/lazyMap.js',{mode:1})
    module.repository.template=lazyMap({
        CompoundArrayContainer: 'template/CompoundArrayContainer.js',
        Container:              'template/Container.js',
        DirectedGraph:          'template/DirectedGraph.js',
        PriorityQueue:          'template/PriorityQueue.js',
        Queue:                  'template/Queue.js',
        Stack:                  'template/Stack.js',
        Vector2:                'template/Vector2.js',
        array:                  'template/array.js',
    },module.shareImport.bind(module))
    let[
        Container,
        DirectedGraph,
        PriorityQueue,
        Queue,
        Stack,
        Vector2,
        array,
    ]=await Promise.all([
        module.repository.template.Container,
        module.repository.template.DirectedGraph,
        module.repository.template.PriorityQueue,
        module.repository.template.Queue,
        module.repository.template.Stack,
        module.repository.template.Vector2,
        module.repository.template.array,
    ])
    return{
        Container,
        DirectedGraph,
        PriorityQueue,
        Stack,
        Queue,
        Vector2,
        array,
    }
})()
