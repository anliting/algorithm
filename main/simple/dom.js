function dom(n){
    if(typeof n=='string')
        n=document.createElement(n)
    let p={
        function:f=>f(n),
        number,
        object,
        string,
    }
    transform([...arguments].slice(1))
    return n
    function transform(t){
        for(let q;q=p[typeof t];t=q(t));
    }
    function string(s){
        n.appendChild(document.createTextNode(s))
    }
    function number(n){
        string(n.toString())
    }
    function object(o){
        switch(true){
            case o instanceof Array:
                array()
                break
            case o instanceof Node:
                n.appendChild(o)
                break
            case o instanceof Promise:
                o.then(transform)
                break
            default:
                if(('length' in o)||o[Symbol.iterator]){
                    o=Array.from(o)
                    array()
                }else
                    Object.assign(n,o)
        }
        function array(){
            o.map(transform)
        }
    }
}
dom.tn=s=>document.createTextNode(s)
dom.html=function(){
    return dom(document.documentElement,...arguments)
}
dom.head=function(){
    return dom(document.head,...arguments)
}
dom.body=function(){
    return dom(document.body,...arguments)
}
export default new Proxy(dom,{
    get:(t,p)=>p in dom||p=='then'?dom[p]:function(){
        return dom(p,...arguments)
    }
})
