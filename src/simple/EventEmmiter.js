function EventEmmiter(){
    this.listeners={}
}
EventEmmiter.prototype.emit=function(key,event){
    if(!(key in this.listeners))
        return
    for(let l of this.listeners[key])
        l(event)
}
EventEmmiter.prototype.off=function(key,listener){
    if(!(key in this.listeners))
        return
    this.listeners[key].delete(listener)
}
EventEmmiter.prototype.on=function(key,listener){
    if(!(key in this.listeners))
        this.listeners[key]=new Set
    this.listeners[key].add(listener)
}
export default EventEmmiter
