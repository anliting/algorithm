function DirectedGraph(){
    this.vertices=[]
    this.edges=[]
}
DirectedGraph.prototype.addVertex=function(){
    let v=Symbol()
    this.vertices.push(v)
    return v
}
DirectedGraph.prototype.addEdge=function(v,w){
    let e={v,w}
    this.edges.push(e)
}
DirectedGraph
