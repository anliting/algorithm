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
    Range.prototype.intersect=function(r){
        this.x=Math.max(this.x,r.x)
        this.y=Math.min(this.y,r.y)
        return this
    }
    Range.prototype.newIntersect=function(r){
        return new Range(
            Math.max(this.x,r.x),
            Math.min(this.y,r.y)
        )
    }
    return Range
})()
