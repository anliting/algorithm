;(async()=>{
    let[
        VertexEdgeArray,
        PriorityQueue,
        Stack,
        Container,
    ]=await Promise.all([
        module.shareImport('DirectedGraph/VertexEdgeArray.js'),
        module.repository.algorithm.PriorityQueue,
        module.repository.algorithm.Stack,
        module.repository.algorithm.Container,
    ])
    function DirectedGraph(DataStructure=VertexEdgeArray){
        this._DataStructure=VertexEdgeArray
        this._data=new this._DataStructure
    }
    Object.defineProperty(DirectedGraph.prototype,'vertices',{get(){
        return this._data.vertices.slice()
    }})
    Object.defineProperty(DirectedGraph.prototype,'edges',{get(){
        return this._data.edges.slice()
    }})
    DirectedGraph.prototype.addVertex=function(v){
        return this._data.addVertex(v)
    }
    DirectedGraph.prototype.addEdge=function(v,w){
        this._data.addEdge(v,w)
    }
    DirectedGraph.prototype.longestTopologicalSort=function(c=new Stack){
        let id={},arc={}
        for(let v of this._data.vertices){
            id[v]=0
            arc[v]=[]
        }
        for(let[v,w]of this._data.edges){
            id[w]++
            arc[v].push(w)
        }
        let res=[]
        for(let v of this._data.vertices.filter(v=>id[v]==0))
            c.in(v)
        while(c.size){
            let v=c.out()
            res.push(v)
            arc[v].map(w=>--id[w]||c.in(w))
        }
        return res
    }
    Object.defineProperty(DirectedGraph.prototype,'topologicalSort',{get(){
        let a=this.longestTopologicalSort()
        if(a.length<this._data.vertices.length)
            throw Error('Cycle detected.')
        return a
    }})
    return DirectedGraph
})()
