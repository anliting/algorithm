/*
我在這裡設計過多型，但是比沒多型的版本慢四倍；這樣的效率在現在（2017-06-06）的處境下這是沒辦法接受的，只好寫成 add-addN 這個模樣。
These names (add, sub, mul, div) come from x86 instructions.
*/
function Vector2(x=0,y=x){
    this.x=x
    this.y=y
}
Vector2.prototype[Symbol.iterator]=function*(){
    yield*[this.x,this.y]
}
// a+b
Vector2.prototype.add=function(v){
    this.x+=v.x
    this.y+=v.y
    return this
}
Vector2.prototype.addN=function(x,y=x){
    this.x+=x
    this.y+=y
    return this
}
// a-b
Vector2.prototype.sub=function(v){
    this.x-=v.x
    this.y-=v.y
    return this
}
Vector2.prototype.subN=function(x,y=x){
    this.x-=x
    this.y-=y
    return this
}
// a*b
Vector2.prototype.mul=function(v){
    this.x*=v.x
    this.y*=v.y
    return this
}
Vector2.prototype.mulN=function(x,y=x){
    this.x*=x
    this.y*=y
    return this
}
// a/b
Vector2.prototype.div=function(v){
    this.x/=v.x
    this.y/=v.y
    return this
}
Vector2.prototype.divN=function(x,y=x){
    this.x/=x
    this.y/=y
    return this
}
// a<b
Vector2.prototype.lt=function(v){
    return this.x<v.x&&this.y<v.y
}
Vector2.prototype.ltN=function(x,y){
    return this.x<x&&this.y<y
}
// a==b
Vector2.prototype.eq=function(v){
    return this.x==v.x&&this.y==v.y
}
Vector2.prototype.eqN=function(x,y){
    return this.x==x&&this.y==y
}
// a>b
Vector2.prototype.gt=function(v){
    return this.x>v.x&&this.y>v.y
}
Vector2.prototype.gtN=function(v){
    return this.x>x&&this.y>y
}
// inner product
Vector2.prototype.ip=function(v){
    return this.x*v.x+this.y*v.y
}
// length
Object.defineProperty(Vector2.prototype,'len',{get(v){
    return this.ip(this)**.5
}})
Object.defineProperty(Vector2.prototype,'new',{get(){
    return new Vector2(this.x,this.y)
}})
// -a: negetive
Object.defineProperty(Vector2.prototype,'newNeg',{get(){
    return this.newMulN(-1)
}})
Vector2.prototype.newAdd=function(v){
    return new Vector2(this.x+v.x,this.y+v.y)
}
Vector2.prototype.newAddN=function(x,y=x){
    return new Vector2(this.x+x,this.y+y)
}
Vector2.prototype.newSub=function(v){
    return new Vector2(this.x-v.x,this.y-v.y)
}
Vector2.prototype.newSubN=function(x,y=x){
    return new Vector2(this.x-x,this.y-y)
}
Vector2.prototype.newMul=function(v){
    return new Vector2(this.x*vx,this.y*v.y)
}
Vector2.prototype.newMulN=function(x,y=x){
    return new Vector2(this.x*x,this.y*y)
}
Vector2.prototype.newDiv=function(v){
    return new Vector2(this.x/v.x,this.y/v.y)
}
Vector2.prototype.newDivN=function(x,y=x){
    return new Vector2(this.x/x,this.y/y)
}
Vector2
