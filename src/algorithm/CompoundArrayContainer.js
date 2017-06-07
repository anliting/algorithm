function CompoundArrayContainer(){
    this._a=[]
}
CompoundArrayContainer.prototype.in=function(){
    this._a.push(...arguments)
}
CompoundArrayContainer.prototype.out=function(){
    return this._a.pop()
}
Object.defineProperty(CompoundArrayContainer.prototype,'size',{get(){
    return this._a.length
}})
CompoundArrayContainer.prototype[Symbol.iterator]=function*(){
    while(this._a.length)
        yield this.out()
}
CompoundArrayContainer
