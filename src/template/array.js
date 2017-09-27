function prefixSum(a){
    for(let i=1;i<a.length;i++)
        a[i]+=a[i-1]
    return a
}
function difference(a){
    for(let i=a.length-1;0<i;i--)
        a[i]-=a[i-1]
    return a
}
export default{
    difference,
    prefixSum,
}
