;(async()=>{
    let CompoundArrayContainer=
        await module.repository.algorithm.CompoundArrayContainer
    function Queue(){
        CompoundArrayContainer.call(this)
    }
    Object.setPrototypeOf(
        Queue.prototype,
        CompoundArrayContainer.prototype
    )
    Queue.prototype.out=function(){
        return this._a.shift()
    }
    return Queue
})()
