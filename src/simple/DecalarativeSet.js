function DecalarativeSet(){
    this._set=new Set
}
DecalarativeSet.prototype.in=function(doc){
    this._set.add(doc)
    if(this._forEach)
        this._forEach.in(doc)
}
DecalarativeSet.prototype.out=function(doc){
    this._set.delete(doc)
    if(this._forEach)
        this._forEach.out(doc)
}
Object.defineProperty(DecalarativeSet.prototype,'forEach',{set(doc){
    if(this._forEach)
        this._set.forEach(this._forEach.out)
    this._forEach=doc
    if(this._forEach)
        this._set.forEach(this._forEach.in)
}})
export default DecalarativeSet
