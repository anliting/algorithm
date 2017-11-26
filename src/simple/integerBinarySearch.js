function arrayLowerBound(a,v,lt){
    return integerBinarySearch(i=>!lt(a[i],v),0,a.length)
}
function arrayUpperBound(a,v,lt){
    return integerBinarySearch(i=>lt(v,a[i]),0,a.length)
}
function integerBinarySearch(func,f,l){
    while(f-l){
        let m=~~((f+l)/2)
        if(func(m))
            l=m
        else
            f=m+1
    }
    return f
}
export default Object.assign(
    integerBinarySearch,
    {arrayLowerBound,arrayUpperBound}
)
