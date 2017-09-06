;(async()=>{
    let NumberPair=await module.repository.template.NumberPair
    function Range(){
        NumberPair.apply(this,arguments)
    }
    Object.setPrototypeOf(Range,NumberPair)
    Object.setPrototypeOf(Range.prototype,NumberPair.prototype)
    // length
    Object.defineProperty(Range.prototype,'len',{get(v){
        return Math.max(0,this.y-this.x)
    }})
    Range.prototype.intersect=function(){
        arguments=[...arguments]
        this.x=Math.max(this.x,...arguments.map(r=>r.x))
        this.y=Math.min(this.y,...arguments.map(r=>r.y))
        return this
    }
    Range.prototype.newIntersect=function(r){
        return new Range(
            Math.max(this.x,...arguments.map(r=>r.x)),
            Math.min(this.y,...arguments.map(r=>r.y))
        )
    }
    return Range
})()
