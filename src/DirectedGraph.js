;(async()=>{
    let[
        VertexEdgeArray,
    ]=await Promise.all([
        module.shareImport('VertexEdgeArray.js'),
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
    DirectedGraph.prototype.longestTopologicalSort=function(){
        let id={},arc={}
        this._data.vertices.map(v=>{
            id[v]=0
            arc[v]=[]
        })
        this._data.edges.map(([v,w])=>{
            id[w]++
            arc[v].push(w)
        })
        let
            a=this._data.vertices.filter(v=>id[v]==0),
            res=[]
        while(a.length){
            let v=a.pop()
            res.push(v)
            arc[v].map(w=>--id[w]||a.push(w))
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
