function Container(){
}
Container.prototype[Symbol.iterator]=function*(){
    while(this.size)
        yield this.out();
};
Container.iterator=c=>Container.prototype[Symbol.iterator].call(c);

function CompoundArrayContainer(){
    Container.call(this);
    this._a=[];
}
Object.setPrototypeOf(
    CompoundArrayContainer.prototype,
    Container.prototype
);
CompoundArrayContainer.prototype.in=function(){
    this._a.push(...arguments);
};
CompoundArrayContainer.prototype.out=function(){
    return this._a.pop()
};
Object.defineProperty(CompoundArrayContainer.prototype,'size',{get(){
    return this._a.length
}});

function VertexEdgeArray(){
    this._vertices=[];
    this._edges=[];
}
Object.defineProperty(VertexEdgeArray.prototype,'vertices',{get(){
    return this._vertices.slice()
}});
Object.defineProperty(VertexEdgeArray.prototype,'edges',{get(){
    return this._edges.slice()
}});
VertexEdgeArray.prototype.addVertex=function(v=Symbol()){
    this._vertices.push(v);
    return v
};
VertexEdgeArray.prototype.addEdge=function(v,w){
    let e=[v,w];
    this._edges.push(e);
};

function Stack(){
    CompoundArrayContainer.call(this);
}
Object.setPrototypeOf(
    Stack.prototype,
    CompoundArrayContainer.prototype
);

function DirectedGraph(DataStructure=VertexEdgeArray){
    this._DataStructure=VertexEdgeArray;
    this._data=new this._DataStructure;
}
Object.defineProperty(DirectedGraph.prototype,'vertices',{get(){
    return this._data.vertices.slice()
}});
Object.defineProperty(DirectedGraph.prototype,'edges',{get(){
    return this._data.edges.slice()
}});
DirectedGraph.prototype.addVertex=function(v){
    return this._data.addVertex(v)
};
DirectedGraph.prototype.addEdge=function(v,w){
    this._data.addEdge(v,w);
};
DirectedGraph.prototype.longestTopologicalSort=function(c=new Stack){
    let id={},arc={};
    for(let v of this._data.vertices){
        id[v]=0;
        arc[v]=[];
    }
    for(let[v,w]of this._data.edges){
        id[w]++;
        arc[v].push(w);
    }
    let res=[];
    for(let v of this._data.vertices.filter(v=>id[v]==0))
        c.in(v);
    for(let v of Container.iterator(c)){
        res.push(v);
        arc[v].map(w=>--id[w]||c.in(w));
    }
    return res
};
Object.defineProperty(DirectedGraph.prototype,'topologicalSort',{get(){
    let a=this.longestTopologicalSort();
    if(a.length<this._data.vertices.length)
        throw Error('Cycle detected.')
    return a
}});

function EventEmmiter(){
    this._listeners={};
}
EventEmmiter.prototype._keyExist=function(key){
    return key in this._listeners
};
EventEmmiter.prototype._ensureKeyExist=function(key){
    if(!(key in this._listeners))
        this._listeners[key]=new Map;
};
EventEmmiter.prototype.emit=function(key,event){
    if(!this._keyExist(key))
        return
    for(let[listener,doc]of[...this._listeners[key].entries()]){
        if(doc.once)
            this.off(key,listener);
        listener(event);
    }
};
EventEmmiter.prototype.off=function(key,listener){
    if(!this._keyExist(key))
        return
    this._listeners[key].delete(listener);
};
EventEmmiter.prototype.on=function(key,listener){
    this._ensureKeyExist(key);
    this._listeners[key].set(listener,{once:false});
};
EventEmmiter.prototype.once=function(key,listener){
    this._ensureKeyExist(key);
    this._listeners[key].set(listener,{once:true});
};

/*
我在這裡設計過多型，但是比沒多型的版本慢四倍；這樣的效率在現在（2017-06-06）的處境下這是沒辦法接受的，只好寫成 add-addN 這個模樣。
These names (add, sub, mul, div) come from x86 instructions.
*/
function Pair(x=0,y=x){
    this.x=x;
    this.y=y;
}
Pair.prototype[Symbol.iterator]=function*(){
    yield*[this.x,this.y];
};
function NumberPair(){
    Pair.apply(this,arguments);
}
Object.setPrototypeOf(NumberPair,Pair);
Object.setPrototypeOf(NumberPair.prototype,Pair.prototype);
// a+b
NumberPair.prototype.add=function(v){
    this.x+=v.x;
    this.y+=v.y;
    return this
};
NumberPair.prototype.addN=function(x,y=x){
    this.x+=x;
    this.y+=y;
    return this
};
// a-b
NumberPair.prototype.sub=function(v){
    this.x-=v.x;
    this.y-=v.y;
    return this
};
NumberPair.prototype.subN=function(x,y=x){
    this.x-=x;
    this.y-=y;
    return this
};
// a*b
NumberPair.prototype.mul=function(v){
    this.x*=v.x;
    this.y*=v.y;
    return this
};
NumberPair.prototype.mulN=function(x,y=x){
    this.x*=x;
    this.y*=y;
    return this
};
// a/b
NumberPair.prototype.div=function(v){
    this.x/=v.x;
    this.y/=v.y;
    return this
};
NumberPair.prototype.divN=function(x,y=x){
    this.x/=x;
    this.y/=y;
    return this
};
// a<b
NumberPair.prototype.lt=function(v){
    return this.x<v.x&&this.y<v.y
};
NumberPair.prototype.ltN=function(x,y){
    return this.x<x&&this.y<y
};
// a==b
NumberPair.prototype.eq=function(v){
    return this.x==v.x&&this.y==v.y
};
NumberPair.prototype.eqN=function(x,y){
    return this.x==x&&this.y==y
};
// a>b
NumberPair.prototype.gt=function(v){
    return this.x>v.x&&this.y>v.y
};
NumberPair.prototype.gtN=function(v){
    return this.x>v.x&&this.y>v.y
};
Object.defineProperty(NumberPair.prototype,'new',{get(){
    return new NumberPair(this.x,this.y)
}});
// -a: negetive
Object.defineProperty(NumberPair.prototype,'newNeg',{get(){
    return this.newMulN(-1)
}});
NumberPair.prototype.newAdd=function(v){
    return new NumberPair(this.x+v.x,this.y+v.y)
};
NumberPair.prototype.newAddN=function(x,y=x){
    return new NumberPair(this.x+x,this.y+y)
};
NumberPair.prototype.newSub=function(v){
    return new NumberPair(this.x-v.x,this.y-v.y)
};
NumberPair.prototype.newSubN=function(x,y=x){
    return new NumberPair(this.x-x,this.y-y)
};
NumberPair.prototype.newMul=function(v){
    return new NumberPair(this.x*v.x,this.y*v.y)
};
NumberPair.prototype.newMulN=function(x,y=x){
    return new NumberPair(this.x*x,this.y*y)
};
NumberPair.prototype.newDiv=function(v){
    return new NumberPair(this.x/v.x,this.y/v.y)
};
NumberPair.prototype.newDivN=function(x,y=x){
    return new NumberPair(this.x/x,this.y/y)
};

function PriorityQueue(cmp){
    CompoundArrayContainer.call(this);
    this._cmp=cmp||((a,b)=>a-b);
}
Object.setPrototypeOf(
    PriorityQueue.prototype,
    CompoundArrayContainer.prototype
);
PriorityQueue.prototype.in=function(){
    for(let i=0;i<arguments.length;i++){let e=arguments[i];
        this._a.push(e);
        for(let i=this._a.length-1,p;i;i=p){
            p=~~((i-1)/2);
            if(this._cmp(this._a[i],this._a[p])<0)
                [this._a[i],this._a[p]]=[this._a[p],this._a[i]];
        }
    }
};
PriorityQueue.prototype.out=function(){
    let e=this._a[0];
    this._a[0]=this._a[this._a.length-1];
    this._a.pop();
    for(let i=0;2*i+1<this._a.length;){
        let min=
            this._a.length<=2*i+2||
            this._cmp(this._a[2*i+1],this._a[2*i+2])<0
        ?
            2*i+1
        :
            2*i+2;
        if(this._cmp(this._a[i],this._a[min])<0)
            break
        ;[this._a[i],this._a[min]]=[this._a[min],this._a[i]];
        i=min;
    }
    return e
};
Object.defineProperty(PriorityQueue.prototype,'top',{get(){
    return this._a[0]
}});

function Queue(){
    CompoundArrayContainer.call(this);
}
Object.setPrototypeOf(
    Queue.prototype,
    CompoundArrayContainer.prototype
);
Queue.prototype.out=function(){
    return this._a.shift()
};

function Range(){
    NumberPair.apply(this,arguments);
}
Object.setPrototypeOf(Range,NumberPair);
Object.setPrototypeOf(Range.prototype,NumberPair.prototype);
// length
Object.defineProperty(Range.prototype,'len',{get(v){
    return Math.max(0,this.y-this.x)
}});
Range.prototype.valueOf=function(){
    return Math.max(0,this.y-this.x)
};
Range.prototype.intersect=function(){
    let a=[...arguments];
    this.x=Math.max(this.x,...a.map(r=>r.x));
    this.y=Math.min(this.y,...a.map(r=>r.y));
    return this
};
Range.prototype.newIntersect=function(){
    let a=[...arguments];
    return new Range(
        Math.max(this.x,...a.map(r=>r.x)),
        Math.min(this.y,...a.map(r=>r.y))
    )
};

function Vector2(){
    NumberPair.apply(this,arguments);
}
Object.setPrototypeOf(Vector2,NumberPair);
Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype);
// inner product
Vector2.prototype.ip=function(v){
    return this.x*v.x+this.y*v.y
};
// length
Object.defineProperty(Vector2.prototype,'len',{get(v){
    return this.ip(this)**.5
}});
Vector2.prototype.valueOf=function(){
    return this.ip(this)**.5
};

function prefixSum(a){
    for(let i=1;i<a.length;i++)
        a[i]+=a[i-1];
    return a
}
function difference(a){
    for(let i=a.length-1;0<i;i--)
        a[i]-=a[i-1];
    return a
}
var array = {
    difference,
    prefixSum,
};

var simple = {
    Container,
    DirectedGraph,
    EventEmmiter,
    NumberPair,
    PriorityQueue,
    Range,
    Stack,
    Queue,
    Vector2,
    array,
};

export { Container, DirectedGraph, EventEmmiter, NumberPair, PriorityQueue, Range, Stack, Queue, Vector2, array };
export default simple;
