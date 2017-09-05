;(async()=>{
    let NumberPair=await module.repository.template.NumberPair
    function Vector2(){
        NumberPair.apply(this,arguments)
    }
    Object.setPrototypeOf(Vector2,NumberPair)
    Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype)
    // inner product
    Vector2.prototype.ip=function(v){
        return this.x*v.x+this.y*v.y
    }
    // length
    Object.defineProperty(Vector2.prototype,'len',{get(v){
        return this.ip(this)**.5
    }})
    return Vector2
})()
