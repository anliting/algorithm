export default{
    normalize(s){
        let res
        if(s[0]=='/'){
            let a=[]
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'){
                    if(a.length)
                        a.pop()
                    continue
                }
                a.push(t)
            }
            res='/'+a.join('/')+(a.length&&s[s.length-1]=='/'?'/':'')
        }else{
            let a=[]
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'&&a.length){
                    a.pop()
                    continue
                }
                a.push(t)
            }
            res=(a.length?a.join('/'):'.')+(s[s.length-1]=='/'?'/':'')
        }
        return res
    },
}
