function IntegerBinarySearch(head,tail){
    this._head=head
    this._tail=tail
}
Object.defineProperty(IntegerBinarySearch.prototype,'ask',{get(){
    return this._head!=this._tail
}})
Object.defineProperty(IntegerBinarySearch.prototype,'in',{set(val){
    if(val)
        this._tail=this.out
    else
        this._head=this.out+1
}})
Object.defineProperty(IntegerBinarySearch.prototype,'out',{get(){
    return~~((this._head+this._tail)/2)
}})
export default IntegerBinarySearch
